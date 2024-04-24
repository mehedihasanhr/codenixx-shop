import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductResponse, ProductsResponse } from './types/product.type';
import { BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductInsertDto } from './dto/product.dto';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  // Fetch a product by these handler
  @Query(() => ProductsResponse)
  async products() {
    return await this.productService.products();
  }

  // Fetch a product by these handler
  @Query(() => ProductResponse)
  async product(@Args('handler') handler: string) {
    if (!handler) throw new BadRequestException('Product handler is missing.');
    return await this.productService.product(handler);
  }

  // insert new product
  @Mutation(() => ProductResponse)
  async createProduct(
    @Args('productInsertDto') productInsertDto: ProductInsertDto,
  ): Promise<ProductResponse> {
    return this.productService.createProduct(productInsertDto);
  }
}
