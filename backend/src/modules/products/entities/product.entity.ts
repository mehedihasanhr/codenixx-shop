import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '@/src/modules/products-categories/entities/category.entity';
import { Variant } from '@/src/modules/products-variants/entities/product-variant.entity';

@ObjectType()
export class Price {
  @Field(() => Float)
  amount: number;

  @Field()
  currency_code: string;
}

@ObjectType()
export class Image {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  alt?: string;

  @Field(() => Int)
  width: number;

  @Field(() => Int)
  height: number;
}

@ObjectType()
export class Product {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  handler: string;

  @Field(() => Price)
  price: Price;

  @Field(() => [Image!])
  images: Image[];

  @Field()
  description: string;

  @Field(() => [Variant])
  variants: Variant[];

  @Field(() => [Category!])
  categories: Category[];
}
