import ProductsTable from "@/components/data-table/products/table";
import { Button } from "@/components/ui/button";
import { productData } from "@/data/product.data";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import PageHeading from "../_components/page-heading";

export default function ProductsPage() {
  return (
    <section className="px-8 py-6">
      <div className="flex items-center justify-between">
        <PageHeading heading="Products Management" />
        <Button size="sm" asChild>
          <Link href="/products/create">
            <IconPlus size={17} />
            <span>Product</span>
          </Link>
        </Button>
      </div>

      <div className="relative mt-8 max-w-full overflow-hidden rounded-lg border border-border/50 bg-white dark:bg-[#31363F] p-6">
        <div className="flex mb-3 text-sm">
          <p className="pr-2.5 border-r font-medium">
            Products (<span className="text-foreground">1254</span>)
          </p>
          <Link
            href="#"
            className="px-2.5 border-r text-primary font-medium hover:underline"
          >
            Published (<span className="text-foreground">1025</span>)
          </Link>
          <Link
            href="/products/drafts"
            className="px-2.5 border-r text-primary font-medium hover:underline"
          >
            Drafts (<span className="text-foreground">125</span>)
          </Link>
          <Link
            href="/products/trash"
            className="px-2.5 text-primary font-medium hover:underline"
          >
            Trash (<span className="text-foreground">54</span>)
          </Link>
        </div>
        <ProductsTable data={productData(15)} />
      </div>
    </section>
  );
}
