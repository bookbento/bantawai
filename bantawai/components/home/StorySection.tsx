import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-body text-gold text-sm uppercase tracking-widest">
              เรื่องราวของเรา
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              มรดกแห่งศิลปะ
              <br />
              สืบทอดมากว่า 100 ปี
            </h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              บ้านถวาย หมู่บ้านหัตถกรรมเก่าแก่ในอำเภอหางดง จังหวัดเชียงใหม่ 
              เป็นศูนย์รวมช่างฝีมือแกะสลักไม้ที่สืบทอดภูมิปัญญาจากรุ่นสู่รุ่น 
              ทุกชิ้นงานผ่านมือช่างที่ทุ่มเทจิตใจ สร้างสรรค์งานศิลปะที่มีคุณค่า
            </p>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              เราคัดสรรผลิตภัณฑ์คุณภาพจากช่างฝีมือท้องถิ่น 
              เพื่อนำเสนอความงามแห่งศิลปะไทยสู่บ้านของคุณ
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                อ่านเพิ่มเติม
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <span className="font-heading text-4xl font-bold text-gold">100+</span>
                <p className="font-body text-sm mt-2">ปีแห่งการสืบทอด</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <span className="font-heading text-4xl font-bold text-gold">50+</span>
                <p className="font-body text-sm mt-2">ช่างฝีมือท้องถิ่น</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <span className="font-heading text-4xl font-bold text-gold">1000+</span>
                <p className="font-body text-sm mt-2">ผลิตภัณฑ์หัตถกรรม</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <span className="font-heading text-4xl font-bold text-gold">5★</span>
                <p className="font-body text-sm mt-2">ความพึงพอใจลูกค้า</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
