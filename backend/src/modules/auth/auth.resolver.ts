import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import {
  ActivationResponse,
  LoginResponse,
  RegisterResponse,
} from './types/auth.types';
import { ActivationDto, LoginDto, RegisterDto } from './dto/auth.dto';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (
      !registerDto.first_name ||
      !registerDto.last_name ||
      !registerDto.email ||
      !registerDto.password
    ) {
      throw new BadRequestException('Please fill all required field.');
    }

    const { activatorToken } = await this.authService.register(
      registerDto,
      context.res,
    );

    return { activatorToken };
  }

  @Mutation(() => ActivationResponse)
  async activateUser(
    @Args('activationDto') activationDto: ActivationDto,
  ): Promise<ActivationResponse> {
    const validation = await this.authService.validateAccount(activationDto);
    return { user: validation.user };
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginDto') loginDto: LoginDto): Promise<LoginResponse> {
    return await this.authService.login(loginDto);
  }
}
