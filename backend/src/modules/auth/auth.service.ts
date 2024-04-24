import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ActivationDto, LoginDto, RegisterDto } from './dto/auth.dto';
import { PrismaService } from '@/prisma/PrismaService';
import * as bcrypt from 'bcrypt';
import { MailService } from '@/src/mail/mail.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Token } from './utils/token';

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly mailerService: MailService,
  ) {}

  // register user
  async register(registerDto: RegisterDto, response: Response) {
    const { email, password, first_name, last_name } = registerDto;

    // check if email already exist or not
    const isEmailExist = await this.prisma.user.findUnique({
      where: { email },
    });

    if (isEmailExist) {
      throw new BadRequestException('User already exist with this email');
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        first_name,
        last_name,
      },
    });

    // create verification token
    const accountVerificationCredentials =
      await this.createAccountActivatorCredentials({
        id: user.id,
        email: user.email,
      });

    // send account verification token to user mails
    await this.mailerService.sendMail({
      email: user.email,
      name: `${user.first_name} ${user.last_name}`,
      subject: 'Activate your account',
      activationCode: accountVerificationCredentials.activationCode,
      template: './activation-mail',
    });

    return {
      activatorToken: accountVerificationCredentials.activatorToken,
      response,
    };
  }

  // create activation code
  async createAccountActivatorCredentials(user: { id: string; email: string }) {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const activatorToken = await this.jwtService.signAsync(
      {
        sub: {
          id: user.id,
          email: user.email,
          activationCode,
        },
      },
      {
        secret: this.config.get('ACCOUNT_VERIFICATION_TOKEN_SECRET'),
      },
    );

    return {
      activationCode,
      activatorToken,
    };
  }

  // validate account
  async validateAccount(activationDto: ActivationDto) {
    const { activationCode, activationToken } = activationDto;

    const payload = await this.jwtService.verifyAsync(activationToken, {
      secret: this.config.get<string>('ACCOUNT_VERIFICATION_TOKEN_SECRET'),
    });

    if (!payload || activationCode !== payload.sub.activationCode) {
      throw new BadRequestException('Invalid activation code');
    }

    const id = payload.sub.id as string;
    const update = await this.prisma.user.update({
      where: { id },
      data: {
        is_verified: true,
      },
    });

    if (update) {
      const user = await this.prisma.user.findUnique({ where: { id } });
      return { user, error: null };
    }

    return { user: null, error: { message: 'Update failed' } };
  }

  // login service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user && (await this.comparePassword(password, user.password))) {
      // create access token
      const token = new Token(this.config, this.jwtService, user);

      const accessToken = await token.accessToken;
      const refreshToken = await token.refreshToken;
      // create refresh token

      console.log({ accessToken, refreshToken });
      return {
        user,
        accessToken,
        refreshToken,
      };
    }

    return {
      error: {
        message: 'Wrong credentials',
      },
    };
  }

  async comparePassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
