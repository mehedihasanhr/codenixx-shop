type Image = {
  id: string;
  url: string;
  alt?: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
};

type TVariant = {
  id: string;
  name: string;
  type: 'SIZE' | 'COLOR';
  image?: Image;
  gallery_id?: string;
  price?: number;
  currency_code?: string;
  stock_quantity: number;
  stock_quantity_unit: string;
  createdAt: Date;
  updatedAt: Date;
};

type TCategory = {
  id: string;
  name: string;
  handler: string;
  description?: string;
  parent?: string;
  parent_id?: string;
  sub_categories?: TCategory[];
  createdAt: Date;
  updatedAt: Date;
};

type TProduct = {
  id: string;
  name: string;
  handler: string;
  price: number;
  images: Image[];
  currency_code: string;
  variants?: TVariant[];
  categories?: TCategory[];
  category_ids: string[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export const ProductShape = (product: TProduct) => {
  return {
    id: product.id,
    name: product.name,
    handler: product.handler,
    price: {
      amount: product.price,
      currency_code: product.currency_code,
    },
    images: product.images.map((i) => ({
      id: i.id,
      url: i.url,
      alt: i.alt,
      width: i.width,
      height: i.height,
    })),

    description: product.description,
    variants: product.variants.map((v: TVariant) => ({
      id: v.id,
      name: v.name,
      type: v.type,
      image: {
        id: v.image.id,
        url: v.image.url,
        alt: v.image.alt,
        width: v.image.width,
        height: v.image.height,
      },
      price: v.price
        ? {
            amount: v.price,
            currency_code: v.currency_code,
          }
        : null,

      stock_quantity: v.stock_quantity,
      stock_quantity_unit: v.stock_quantity_unit,
    })),

    categories: product.categories.map((c: TCategory) => ({
      id: c.id,
      name: c.name,
      handler: c.handler,
      description: c.description,
    })),
  };
};
