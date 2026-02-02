import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

export const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-body text-accent text-sm uppercase tracking-widest">
              คัดสรรมาให้คุณ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
              สินค้าแนะนำ
            </h2>
          </div>
          <Button variant="ghost" className="self-start md:self-auto" asChild>
            <Link href="/shop">
              ดูทั้งหมด
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
