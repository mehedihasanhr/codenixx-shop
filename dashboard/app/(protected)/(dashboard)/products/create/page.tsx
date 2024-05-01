import ProductInsertForm from "@/components/forms/product-insert-form";
import PageHeading from "../../_components/page-heading";

export default function ProductInsertPage() {
  return (
    <section className="py-6 px-8">
      <PageHeading heading="Add New Product" />

      <div className="mt-8 max-w-full overflow-hidden rounded-lg pb-6">
        <ProductInsertForm />
      </div>
    </section>
  );
}
