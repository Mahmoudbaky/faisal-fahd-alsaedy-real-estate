import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
const footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/only-logo.png" alt="Logo" width={32} height={32}  />
                <span className="text-lg font-bold text-foreground">{APP_NAME}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                شريكك الموثوق في عالم العقارات. نحن نساعدك في تحقيق أحلامك العقارية.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    العقارات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
تقييم الأصول العقارية                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                  الدراسات العقارية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
الاستشارات                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                 التدقيق والمراجعة
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">تابعنا</h4>
              <p className="text-gray-400 mb-4">ابق على اطلاع بأحدث العروض والأخبار العقارية</p>
              <div className="flex gap-2">
                <Input placeholder="بريدك الإلكتروني" className="text-right" />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">اشترك</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 شركة {APP_NAME}  . جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
  )
}


export default footer
