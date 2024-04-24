import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductsVariantsService } from './products-variants.service';
import { ProductVariantCreationResponse } from './types/product-variant.types';
import { ProductVariantDto } from './dto/product-variant.dto';

@Resolver()
export class ProductsVariantsResolver {
  constructor(
    private readonly productVariantService: ProductsVariantsService,
  ) {}

  // create new product variant
  @Mutation(() => ProductVariantCreationResponse)
  async createProductVariant(
    @Args('variantDto') variantDto: ProductVariantDto,
  ): Promise<ProductVariantCreationResponse> {
    return this.productVariantService.createVariant(variantDto);
  }
}
