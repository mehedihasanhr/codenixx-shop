import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from '../prisma/PrismaService';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductsCategoriesModule } from './modules/products-categories/products-categories.module';
import { ProductsVariantsModule } from './modules/products-variants/products-variants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),

    UsersModule,

    AuthModule,

    MailModule,

    ProductsModule,

    ProductsCategoriesModule,

    ProductsVariantsModule,
  ],
  controllers: [],
  providers: [PrismaService, ConfigService],
})
export class AppModule {}
