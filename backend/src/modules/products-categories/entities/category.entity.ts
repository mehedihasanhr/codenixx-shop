import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  handler: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Category, { nullable: true })
  parent?: Category;

  @Field({ nullable: true })
  parent_id?: string;

  @Field(() => [Category], { nullable: true })
  sub_categories?: Category[];
}
