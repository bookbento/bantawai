import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="ช่างแกะสลักไม้บ้านถวาย"
          fill
          className="object-cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <span className="inline-block font-body text-gold text-sm md:text-base uppercase tracking-widest">
            หัตถกรรมไทยแท้ จากเชียงใหม่
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            ศิลปะแห่งไม้
            <br />
            <span className="text-gradient-gold">มรดกแห่งบ้านถวาย</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            สืบสานภูมิปัญญาช่างฝีมือล้านนากว่า 100 ปี 
            งานแกะสลักไม้และหัตถกรรมพรีเมียมส่งตรงจากหมู่บ้านถวาย
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/shop">
                ช้อปสินค้า
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/about">เรื่องราวของเรา</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};
