export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  images: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "โต๊ะไม้แกะสลัก",
    category: "เฟอร์นิเจอร์",
    price: 8500,
    originalPrice: 9800,
    inStock: true,
    images: ["https://picsum.photos/seed/table/800/800"],
  },
  {
    id: "2",
    name: "โคมไฟไม้ลายช้าง",
    category: "ของตกแต่ง",
    price: 2200,
    inStock: true,
    images: ["https://picsum.photos/seed/lamp/800/800"],
  },
  {
    id: "3",
    name: "ที่ใส่ทิชชูไม้",
    category: "ของใช้",
    price: 450,
    inStock: false,
    images: ["https://picsum.photos/seed/tissue/800/800"],
  },
  {
    id: "4",
    name: "ช้างแกะสลักของตกแต่ง",
    category: "ของตกแต่ง",
    price: 1200,
    inStock: true,
    images: ["https://picsum.photos/seed/elephant/800/800"],
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB" }).format(value);
