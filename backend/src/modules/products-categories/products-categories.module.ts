import { Module } from '@nestjs/common';
import { ProductsCategoriesService } from './products-categories.service';
import { ProductsCategoriesResolver } from './products-categories.resolver';
import { PrismaService } from '@/prisma/PrismaService';

@Module({
  providers: [
    PrismaService,
    ProductsCategoriesService,
    ProductsCategoriesResolver,
  ],
})
export class ProductsCategoriesModule {}
