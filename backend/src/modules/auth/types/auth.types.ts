import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

// error type
@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field()
  code?: string;
}

// register response type
@ObjectType()
export class RegisterResponse {
  //Activation token
  @Field()
  activatorToken: string;

  // Error
  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

// Activation Response type
@ObjectType()
export class ActivationResponse {
  @Field(() => User)
  user: User | unknown;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

// Login response type
@ObjectType()
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User | unknown;

  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

// Logout response type
@ObjectType()
export class LogoutResponse {
  @Field()
  message?: string;
}

// forgot password response type
@ObjectType()
export class ForgotPasswordResponse {
  @Field()
  message: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

// reset password response type
@ObjectType()
export class ResetPasswordResponse {
  @Field(() => User)
  user: User | unknown;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
