import ProductInsertForm from "@/components/forms/product-insert-form";
import PageHeading from "../../_components/page-heading";

export default function ProductInsertPage() {
  return (
    <section className="py-6 px-8">
      <PageHeading heading="Product Insert Form" />

      <div className="mt-8 max-w-full overflow-hidden rounded-lg border border-border/50 bg-white dark:bg-[#31363F] p-6">
        <ProductInsertForm />
      </div>
    </section>
  );
}
