import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';
import {
  ProductErrorType,
  Status,
} from '@/src/modules/products/types/product.type';

@ObjectType()
export class ProductCategoryResponse {
  @Field(() => Category, { nullable: true })
  category: Category | unknown;

  @Field()
  message: string;

  @Field(() => Status)
  status: string;

  @Field(() => ProductErrorType, { nullable: true })
  error?: ProductErrorType | null;
}

@ObjectType()
export class ProductCategoriesResponse {
  @Field(() => [Category], { nullable: true })
  categories: Category[] | unknown;

  @Field()
  message: string;

  @Field(() => Status)
  status: string;

  @Field(() => ProductErrorType, { nullable: true })
  error?: ProductErrorType | null;
}
