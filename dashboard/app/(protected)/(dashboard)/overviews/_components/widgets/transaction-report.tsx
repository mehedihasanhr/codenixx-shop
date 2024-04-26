import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, priceFormatter } from "@/lib/utils";
import { type Currency, faker } from "@faker-js/faker";
import _ from "lodash";
import Link from "next/link";

interface IProps {
  className?: string;
}

interface ITransaction {
  id: string;
  issuer: string;
  currency: Currency;
  amount: string;
  accountNumber: string;
  accountName: string;
  maskNumber: string;
  transactionType: string;
}

function fakeData(n: number) {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.string.uuid(),
      issuer: faker.finance.creditCardIssuer(),
      currency: faker.finance.currency(),
      amount: faker.finance.amount({ symbol: "" }),
      accountNumber: faker.finance.accountNumber(),
      accountName: faker.finance.accountName(),
      maskNumber: faker.finance.maskedNumber(),
      transactionType: faker.finance.transactionType(),
    });
  }

  return data;
}

export default function TransactionReport(props: IProps) {
  return (
    <Card className={cn("relative", props.className)}>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-medium leading-4">
          Transactions
        </CardTitle>
        <CardDescription>
          Total 58 Transactions done in this month
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full px-0 pb-3 pt-0">
        <ScrollArea className="h-[345px] px-6">
          {_.map(fakeData(15), (transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function Transaction({ transaction }: { transaction: ITransaction }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-dashed py-2">
      <div className="h-10 w-10 rounded-lg bg-foreground/20" />
      <div className="flex-1">
        <Link
          href="#"
          className="line-clamp-1 text-sm hover:text-primary hover:underline"
        >
          {_.startCase(transaction.issuer)}
        </Link>
        <span className="text-xs text-foreground/70">
          {_.startCase(transaction.transactionType)}
        </span>
      </div>

      <div className="min-w-fit whitespace-nowrap">
        <span className="block text-right text-sm font-semibold">
          {priceFormatter(
            Number(transaction.amount),
            transaction.currency.code
          )}
        </span>
      </div>
    </div>
  );
}
