import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/PrismaService';
import { ProductVariantDto } from './dto/product-variant.dto';
import { ProductVariantCreationResponse } from './types/product-variant.types';

@Injectable()
export class ProductsVariantsService {
  constructor(private readonly prisma: PrismaService) {}

  async createVariant(
    variantDto: ProductVariantDto,
  ): Promise<ProductVariantCreationResponse> {
    const {
      name,
      type,
      gallery_id,
      price,
      currency_code,
      stock_quantity,
      stock_quantity_unit,
      product_id,
    } = variantDto;

    // create variant
    const data = await this.prisma.productVariant.create({
      data: {
        name,
        type,
        gallery_id,
        price,
        currency_code,
        stock_quantity,
        stock_quantity_unit,
        product_id,
      },
      include: { image: true },
    });

    const variant = {
      id: data.id,
      name: data.name,
      type: data.type,
      image: data.image,
      price: data.price
        ? {
            amount: data.price,
            currency_code: data.currency_code,
          }
        : null,
      stock_quantity: data.stock_quantity,
      stock_quantity_unit: data.stock_quantity_unit,
    };

    return {
      variant,
      message: 'Variant added successfully',
      status: 'SUCCESS',
    };
  }
}
