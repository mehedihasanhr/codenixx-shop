import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, priceFormatter } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { IconDots } from "@tabler/icons-react";
import dayjs from "dayjs";
import _ from "lodash";
import Link from "next/link";

interface IProps {
  className?: string;
}

interface IProduct {
  id: string;
  invoice: number;
  name: string;
  sold: number;
  price: {
    amount: number;
    currencyCode: string;
  };
  category: string;
  department: string;
  issueDate: Date;
}

function fakeData(n: number) {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.commerce.isbn(),
      invoice: Math.floor(Math.random() * 99999 + 1000000),
      name: faker.commerce.productName(),
      sold: Number(faker.number.int({ min: 1, max: 20 })),
      price: {
        amount: Number(faker.commerce.price({ min: 200, max: 10000, dec: 2 })),
        currencyCode: "USD",
      },
      category: faker.commerce.product(),
      department: faker.commerce.department(),
      issueDate: faker.date.recent(),
    });
  }

  return data;
}

export default function RecentOrders(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <CardHeader className="px-6 pb-2 pt-6">
        <CardTitle className="text-xl font-medium leading-4">
          Recent Orders
        </CardTitle>
        <CardDescription>User from all channels</CardDescription>
      </CardHeader>
      <CardContent className="h-[385px] w-full px-6 pb-3 pt-0">
        <ProductTable products={fakeData(5)} />
        <Pagination className="justify-between border-t pt-2">
          <PaginationContent>
            <span className="text-sm opacity-70">Total 48 items</span>
          </PaginationContent>
          <PaginationContent className="opacity-70">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}

function ProductTable({ products }: { products: IProduct[] }) {
  return (
    <Table className="p-0">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px] text-xs"># Invoice</TableHead>
          <TableHead className="text-xs">Product</TableHead>
          <TableHead className="text-xs">Issue date</TableHead>
          <TableHead className="w-[80px] text-right text-xs">Amount</TableHead>
          <TableHead className="w-[40px] text-right text-xs">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {_.map(products, (product) => (
          <ProductTableRowData key={product.id} product={product} />
        ))}
      </TableBody>
    </Table>
  );
}

function ProductTableRowData({ product }: { product: IProduct }) {
  return (
    <TableRow>
      <TableCell>
        <Link
          href="#"
          className="line-clamp-1 text-sm font-medium hover:text-primary hover:underline"
        >
          {product.invoice}
        </Link>
      </TableCell>
      <TableCell className="py-2">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-foreground/20" />
          <div className="flex-1">
            <Link
              href="#"
              className="line-clamp-1 text-sm hover:text-primary hover:underline"
            >
              {product.name}
            </Link>
            <span className="text-xs text-foreground/70">
              {product.category}
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell className="">
        {dayjs(product.issueDate).format("MMM DD, YYYY")}
      </TableCell>
      <TableCell className="text-right font-semibold">
        {priceFormatter(product.price.amount, product.price.currencyCode)}
      </TableCell>
      <TableCell className="text-right">
        <IconDots size={14} className="opacity-50" />
      </TableCell>
    </TableRow>
  );
}
