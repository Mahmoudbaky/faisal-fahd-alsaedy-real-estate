import { Home , Phone } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-l from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">شركة فيصل فهد الصاعدي للتقييم العقاري</h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها وعراقتها لا تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية واضحة تعكس مقوماتها المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم العمراني والسكاني
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-muted-foreground hover:bg-gray-100">
                  <Home className="h-5 w-5 ml-2" />
                  تصفح العقارات
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-muted-foreground bg-transparent"
                >
                  <Phone className="h-5 w-5 ml-2" />
                  استشارة مجانية
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/30320203/pexels-photo-30320203.png"
                alt="منزل فاخر"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-[600px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
