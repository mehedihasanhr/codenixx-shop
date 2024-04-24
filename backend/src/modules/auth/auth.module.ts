import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersService } from '../users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/prisma/PrismaService';
import { MailService } from '../../mail/mail.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get<string>('ACCOUNT_VERIFICATION_TOKEN_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    PrismaService,
    AuthService,
    AuthResolver,
    UsersService,
    JwtService,
    MailService,
  ],
})
export class AuthModule {}
