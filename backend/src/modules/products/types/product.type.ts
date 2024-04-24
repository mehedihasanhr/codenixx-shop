import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
import { Category } from '@/src/modules/products-categories/entities/category.entity';

// Define the Status enum type
export enum Status {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

registerEnumType(Status, { name: 'Status' });

@ObjectType()
export class ProductErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class ProductResponse {
  @Field(() => Product, { nullable: true })
  product: Product | unknown;

  @Field()
  message: string;

  @Field(() => Status)
  status: string;

  @Field(() => ProductErrorType, { nullable: true })
  error?: ProductErrorType | null;
}

@ObjectType()
export class ProductsResponse {
  @Field(() => [Product], { nullable: true })
  products: Product[] | unknown;

  @Field()
  message: string;

  @Field(() => Status)
  status: string;

  @Field(() => ProductErrorType, { nullable: true })
  error?: ProductErrorType | null;
}

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
