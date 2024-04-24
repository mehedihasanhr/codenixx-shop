import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Avatar {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  userId: string;
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone_number: string;

  // @Field(() => Avatar, { nullable: true })
  // avatar?: Avatar | null;

  @Field()
  role: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  is_verified: boolean;
}
