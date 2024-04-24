import { Module } from '@nestjs/common';
import { ProductsVariantsService } from './products-variants.service';
import { ProductsVariantsResolver } from './products-variants.resolver';
import { PrismaService } from '@/prisma/PrismaService';

@Module({
  providers: [PrismaService, ProductsVariantsService, ProductsVariantsResolver],
})
export class ProductsVariantsModule {}
