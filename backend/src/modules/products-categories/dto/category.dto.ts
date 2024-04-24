import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class ProductCategoryDto {
  @Field()
  @IsNotEmpty({ message: 'Category name is required.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Category handler is required.' })
  handler: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  parent_id: string;
}
