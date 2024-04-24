import { Field, ObjectType } from '@nestjs/graphql';

import {
  ProductErrorType,
  Status,
} from '@/src/modules/products/types/product.type';
import { Variant } from '../entities/product-variant.entity';

@ObjectType()
export class ProductVariantCreationResponse {
  @Field(() => Variant)
  variant: Variant;

  @Field()
  message: string;

  @Field(() => Status)
  status: string;

  @Field(() => ProductErrorType, { nullable: true })
  error?: ProductErrorType | null;
}
