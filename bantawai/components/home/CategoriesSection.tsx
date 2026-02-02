import { Link } from "react-router-dom";
import { categories } from "@/lib/products";
import productElephant from "@/assets/product-elephant.jpg";
import productTable from "@/assets/product-table.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productTissuebox from "@/assets/product-tissuebox.jpg";

const categoryImages: Record<string, string> = {
  "wood-carving": productElephant,
  "furniture": productTable,
  "home-decor": productLamp,
  "otop-crafts": productTissuebox,
};

export const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-body text-accent text-sm uppercase tracking-widest">
            สำรวจผลิตภัณฑ์
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
            หมวดหมู่สินค้า
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-foreground">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-primary-foreground/70 mt-1">
                  {category.nameEn}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
