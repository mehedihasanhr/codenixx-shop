import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '@/prisma/PrismaService';

@Module({
  providers: [PrismaService, UsersService, UsersResolver],
})
export class UsersModule {}
