import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">บ้านถวาย</h3>
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
              หมู่บ้านหัตถกรรมไม้แกะสลักที่มีชื่อเสียงระดับโลก 
              สืบสานภูมิปัญญาท้องถิ่นล้านนามากว่า 100 ปี
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">ลิงก์ด่วน</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop" className="font-body text-primary-foreground/80 hover:text-gold transition-colors">
                สินค้าทั้งหมด
              </Link>
              <Link to="/about" className="font-body text-primary-foreground/80 hover:text-gold transition-colors">
                เกี่ยวกับเรา
              </Link>
              <Link to="/contact" className="font-body text-primary-foreground/80 hover:text-gold transition-colors">
                ติดต่อเรา
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">ติดต่อเรา</h4>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  หมู่บ้านถวาย ต.ขุนคง อ.หางดง<br />
                  จ.เชียงใหม่ 50230
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">053-123-456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">info@bantawai.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">ติดตามเรา</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © 2024 บ้านถวาย Craft Village. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};
