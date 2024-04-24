import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Image, Price } from '@/src/modules/products/entities/product.entity';

@ObjectType()
export class Variant {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => Image, { nullable: true })
  image?: Image | null;

  @Field(() => Price, { nullable: true })
  price?: Price;

  @Field(() => Int)
  stock_quantity: number;

  @Field()
  stock_quantity_unit: string;
}
