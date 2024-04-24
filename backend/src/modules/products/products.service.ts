import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/PrismaService';
import { ProductShape } from './utils/product-shape';
import { ProductInsertDto } from './dto/product.dto';
import { ProductResponse, ProductsResponse } from './types/product.type';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // products
  async products(): Promise<ProductsResponse> {
    const data = await this.prisma.product.findMany({
      include: { variants: true, categories: true, images: true },
    });

    const products = [];

    if (data) {
      data.map((d) => products.push(ProductShape(d)));
    }

    return {
      products,
      message: 'Products fetch successfully',
      status: 'SUCCESS',
      error: null,
    };
  }

  // Product find by id
  async product(handler: string): Promise<ProductResponse> {
    const productData = await this.prisma.product.findFirst({
      where: { handler },
      include: { variants: true, categories: true, images: true },
    });

    return {
      product: ProductShape(productData),
      message: 'Product successfully fetch.',
      status: 'SUCCESS',
      error: null,
    };
  }

  // create product
  async createProduct(productInsertDto: ProductInsertDto) {
    const { name, handler, price, currency_code } = productInsertDto;

    const insert = await this.prisma.product.create({
      data: {
        name,
        handler,
        price,
        currency_code,
        description: productInsertDto.description,
      },
      include: { variants: true, categories: true, images: true },
    });

    return {
      product: ProductShape(insert),
      message: 'Product insert successfully.',
      status: 'SUCCESS',
      error: null,
    };
  }
}
