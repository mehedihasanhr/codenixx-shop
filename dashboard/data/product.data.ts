import { faker } from "@faker-js/faker";

export const productData = (n: number = 10) => {
  const data = [];

  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.commerce.isbn({ variant: 10 }),
      name: faker.commerce.productName(),
      handler: faker.commerce.productName().toLowerCase().split(" ").join("_"),
      price: {
        amount: Number(faker.commerce.price({ symbol: "" })),
        currency_code: "USD",
      },
      images: [],
      description: faker.commerce.productDescription(),
      stock_quantity: faker.number.int({ min: 0, max: 100 }),
      stock_quantity_unit: "",
      categories: [
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
          handler: faker.commerce
            .department()
            .toLowerCase()
            .split(" ")
            .join("_"),
          description: faker.commerce.productDescription(),
        },
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
          handler: faker.commerce
            .department()
            .toLowerCase()
            .split(" ")
            .join("_"),
          description: faker.commerce.productDescription(),
        },
      ],
      reviews: {
        ratings: [],
        totalReviews: 250,
        totalRatings: 250 * Number(faker.number.float({ min: 0, max: 5 })),
        averageRating: Number(
          (250 * Number(faker.number.float({ min: 0, max: 5 }))) / 250
        ).toFixed(2),
      },
    });
  }

  return data;
};

export const categoriesData = (n: number = 15) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      handler: faker.commerce.department().toLowerCase().split(" ").join("_"),
      description: faker.commerce.productDescription(),
    });
  }

  return data;
};
