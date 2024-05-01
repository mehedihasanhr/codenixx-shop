export interface Image {
  id: string;
  url: string;
  alt?: string;
  width: number;
  height: number;
}

export interface TPrice {
  amount: number;
  currency_code: string;
}

export interface TVariant {
  id: string;
  name: string;
  type: "SIZE" | "COLOR";
  image?: Image;
  gallery_id?: string;
  price?: TPrice;
  stock_quantity: number;
  stock_quantity_unit: string;
}

export interface TCategory {
  id: string;
  name: string;
  handler: string;
  description?: string;
}

export interface TProduct {
  id: string;
  name: string;
  handler: string;
  price: TPrice;
  images: Image[];
  variants?: TVariant[];
  categories?: TCategory[];
  description: string;
  stock_quantity: number;
  stock_quantity_unit: string;
  reviews: {
    ratings: never[];
    totalReviews: number;
    totalRatings: number;
    averageRating: string;
  };
}
