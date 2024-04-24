import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from '@/prisma/PrismaService';

@Module({
  providers: [PrismaService, ProductsService, ProductsResolver],
})
export class ProductsModule {}
