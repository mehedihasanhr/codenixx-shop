import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// Register DTO
@InputType()
export class RegisterDto {
  // First name
  @Field()
  @IsNotEmpty({ message: 'First name is required.' })
  @IsString({ message: 'Name must need to be one string.' })
  first_name: string;

  // Last Name
  @Field()
  @IsNotEmpty({ message: 'Last name is required.' })
  @IsString({ message: 'Name must need to be one string.' })
  last_name: string;

  // Email
  @Field()
  @IsNotEmpty({ message: 'Email is required!' })
  @IsEmail({}, { message: `Email isn't valid.` })
  email: string;

  // Password
  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;
}

// activation Dto
@InputType()
export class ActivationDto {
  @Field()
  @IsNotEmpty({ message: 'Activation Token is required.' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Activation Code is required.' })
  activationCode: string;
}

// Login DTO
@InputType()
export class LoginDto {
  // Email
  @Field()
  @IsNotEmpty({ message: 'Wrong credential' })
  @IsEmail({}, { message: 'Wrong credential' })
  email: string;
  // Password
  @Field()
  @IsNotEmpty({ message: 'Wrong Credential' })
  password: string;
}

// Forgot password DTO
@InputType()
export class ForgotPasswordDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;
}

// reset password DTO class
@InputType()
export class ResetPasswordDto {
  // new Password
  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;

  // token for reset password
  @Field()
  @IsNotEmpty({ message: 'Reset password token is required.' })
  resetPasswordToken: string;
}
