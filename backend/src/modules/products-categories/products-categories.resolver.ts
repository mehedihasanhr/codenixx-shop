import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  ProductCategoriesResponse,
  ProductCategoryResponse,
} from '../products/types/product.type';
import { ProductCategoryDto } from './dto/category.dto';
import { ProductsCategoriesService } from './products-categories.service';

@Resolver()
export class ProductsCategoriesResolver {
  constructor(
    private readonly productCategoryService: ProductsCategoriesService,
  ) {}
  // fetch all categories
  @Query(() => ProductCategoriesResponse)
  async categories(): Promise<ProductCategoriesResponse> {
    return this.productCategoryService.categories();
  }

  // fetch category by handler
  @Query(() => ProductCategoryResponse)
  async category(
    @Args('handler') handler: string,
  ): Promise<ProductCategoryResponse> {
    return this.productCategoryService.category(handler);
  }

  // create product category
  @Mutation(() => ProductCategoryResponse)
  async createCategory(
    @Args('productCategoryDto') productCategoryDto: ProductCategoryDto,
  ): Promise<ProductCategoryResponse> {
    return this.productCategoryService.createCategory(productCategoryDto);
  }

  // delete a product category
  @Mutation(() => ProductCategoryResponse)
  async deleteCategory(
    @Args('handler') handler: string,
  ): Promise<ProductCategoryResponse> {
    return this.productCategoryService.deleteCategory(handler);
  }
}
