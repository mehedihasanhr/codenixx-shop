import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/PrismaService';
import {
  ProductCategoriesResponse,
  ProductCategoryResponse,
} from '../products/types/product.type';
import { ProductCategoryDto } from './dto/category.dto';

@Injectable()
export class ProductsCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  // fetch categories
  async categories(): Promise<ProductCategoriesResponse> {
    const data = await this.prisma.productCategory.findMany({
      include: {
        parent: true,
        sub_categories: true,
      },
    });

    const categories = [];
    if (data) {
      data.map((d) =>
        categories.push({
          id: d.id,
          name: d.name,
          handler: d.handler,
          parent: d.parent,
          parent_id: d.parent_id,
          description: d.description,
          sub_categories: d.sub_categories,
        }),
      );
    }

    return {
      categories,
      message: 'Categories fetch successfully',
      status: 'SUCCESS',
    };
  }

  // fetch category by handler
  async category(handler: string) {
    const data = await this.prisma.productCategory.findUnique({
      where: { handler },
      include: {
        parent: true,
        sub_categories: true,
      },
    });

    const category = {
      id: data.id,
      name: data.name,
      handler: data.handler,
      parent: data.parent,
      parent_id: data.parent_id,
      description: data.description,
      sub_categories: data.sub_categories,
    };

    return {
      category,
      message: 'Category added successfully',
      status: 'SUCCESS',
    };
  }

  // create product categories
  async createCategory(
    productCategoryDto: ProductCategoryDto,
  ): Promise<ProductCategoryResponse> {
    const { name, handler, description } = productCategoryDto;

    // check this name already exit
    const isExitWithProvidedName = await this.prisma.productCategory.findUnique(
      { where: { name } },
    );

    if (isExitWithProvidedName) {
      throw new BadRequestException(
        `A category with this name already exists.`,
      );
    }

    // check these handler already exit
    const isExitWithProvidedHandler =
      await this.prisma.productCategory.findUnique({ where: { handler } });

    if (isExitWithProvidedHandler) {
      throw new BadRequestException(
        'A category with this handler already exited.',
      );
    }

    const data = await this.prisma.productCategory.create({
      data: {
        name,
        handler,
        description,
        ...productCategoryDto,
      },
      include: {
        parent: true,
        sub_categories: true,
      },
    });

    const category = {
      id: data.id,
      name: data.name,
      handler: data.handler,
      parent: data.parent,
      parent_id: data.parent_id,
      description: data.description,
      sub_categories: data.sub_categories,
    };

    return {
      category,
      message: 'Category added successfully',
      status: 'SUCCESS',
    };
  }

  // update a category

  // delete a category
  async deleteCategory(handler: string) {
    // delete category and sub categories also
    const deleteCategory = await this.prisma.productCategory.delete({
      where: { handler },
    });

    return {
      category: deleteCategory,
      message:
        'The category and its sub-categories have been deleted successfully.',
      status: 'SUCCESS',
    };
  }
}
