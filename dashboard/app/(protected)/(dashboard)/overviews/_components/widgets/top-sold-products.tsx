import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, priceFormatter } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import _ from "lodash";
import Link from "next/link";

interface IProps {
  className?: string;
}

interface IProduct {
  id: string;
  name: string;
  sold: number;
  price: {
    amount: number;
    currencyCode: string;
  };
  category: string;
  department: string;
}

function fakeData(n: number) {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.commerce.isbn(),
      name: faker.commerce.productName(),
      sold: Number(faker.number.int({ min: 1, max: 20 })),
      price: {
        amount: Number(faker.commerce.price({ min: 200, max: 10000, dec: 2 })),
        currencyCode: "USD",
      },
      category: faker.commerce.product(),
      department: faker.commerce.department(),
    });
  }

  return data;
}

export default function TopSoldProducts(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-medium leading-4">
          Top Sells products
        </CardTitle>
        <CardDescription>User from all channels</CardDescription>
      </CardHeader>
      <CardContent className="w-full px-0 pb-3 pt-0">
        <ScrollArea className="h-[345px] px-6">
          {_.map(fakeData(15), (product) => (
            <TopSoldProduct key={product.id} product={product} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function TopSoldProduct({ product }: { product: IProduct }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-dashed py-2">
      <div className="h-10 w-10 rounded-lg bg-foreground/20" />
      <div className="flex-1">
        <Link
          href="#"
          className="line-clamp-1 text-sm hover:text-primary hover:underline"
        >
          {product.name}
        </Link>
        <span className="text-xs text-foreground/70">{product.category}</span>
      </div>

      <div className="min-w-fit whitespace-nowrap">
        <span className="block text-right text-sm font-semibold">
          {priceFormatter(
            product.price.amount * product.sold,
            product.price.currencyCode
          )}
        </span>
        <span className="block text-xs text-foreground/70">
          Total Sold: {product.sold}
        </span>
      </div>
    </div>
  );
}
