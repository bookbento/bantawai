"use client";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded">
            ลดราคา
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-background text-foreground font-semibold px-4 py-2 rounded">
              สินค้าหมด
            </span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <span className="text-xs text-muted-foreground font-body uppercase tracking-wide">
          {product.category}
        </span>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading text-lg font-semibold mt-1 hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-heading text-xl font-bold text-accent">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <button
          onClick={() => product.inStock && addToCart(product)}
          disabled={!product.inStock}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg font-body font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          เพิ่มลงตะกร้า
        </button>
      </div>
    </div>
  );
};
