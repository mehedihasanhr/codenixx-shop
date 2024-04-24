import { Field, Float, InputType, PartialType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class ProductInsertDto {
  @Field()
  @IsNotEmpty({ message: 'Product name is required.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Product slug is required.' })
  handler: string;

  @Field(() => Float)
  @IsNotEmpty({ message: 'Product price is required.' })
  @IsNumber({}, { message: 'Price must be a number' })
  price: number;

  @Field()
  @IsNotEmpty({ message: 'Currency is required.' })
  currency_code: string;

  @Field(() => [String])
  @IsArray({ message: 'Please select at least one category' })
  category_ids: string[];

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class ProductUpdateDto extends PartialType(ProductInsertDto) {}
