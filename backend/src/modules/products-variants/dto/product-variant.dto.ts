import {
  Field,
  Float,
  InputType,
  Int,
  registerEnumType,
} from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

// Define the Status enum type
export enum VariantType {
  COLOR = 'COLOR',
  SIZE = 'SIZE',
}

registerEnumType(VariantType, { name: 'VariantType' });

@InputType()
export class ProductVariantDto {
  @Field()
  @IsNotEmpty({ message: 'Category name is required.' })
  name: string;

  @Field(() => VariantType)
  @IsNotEmpty({ message: 'Category handler is required.' })
  type: VariantType;

  @Field({ nullable: true })
  gallery_id?: string;

  @Field(() => Float, { nullable: true })
  @IsNumber({}, { message: 'Price must be a number' })
  price?: number;

  @Field({ nullable: true })
  currency_code?: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'Stock quantity required' })
  @IsNumber({}, { message: 'Quantity must be a number' })
  stock_quantity: number;

  @Field()
  @IsNotEmpty({ message: 'Stock quantity unit required' })
  stock_quantity_unit: string;

  @Field()
  product_id: string;
}
