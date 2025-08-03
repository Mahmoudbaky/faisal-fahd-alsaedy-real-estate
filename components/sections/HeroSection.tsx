import { Home , Phone } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import SplitText from "../animations/TextAnimation"

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-l from-primary to-primary/80 text-primary-foreground min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SplitText 
                text="شركة فيصل فهد الصاعدي للتقييم العقاري"
                className="text-4xl md:text-6xl font-bold leading-tight"
                splitType="words"
                delay={150}
                duration={0.8}
                ease="power3.out"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="right"
              />
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                المملكة العربية السعودية ذات تاريخ عريق قديم الأزل قدمها وعراقتها لا تلغي أنها تتمتع بتطور وحداثة وتجدد يقوم على رؤية واضحة تعكس مقوماتها المتعددة الاقتصادية والبيئية والثروات النفطية و التقدم العمراني والسكاني
              </p>
              
            </div>
            <div className="relative">
              <Image
                src="/images/photo-collage.png"
                alt="منزل فاخر"
                width={800}
                height={600}
                className="rounded-lg  object-cover w-[600px] h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection


//  src="https://images.pexels.com/photos/30320203/pexels-photo-30320203.png"
//  src="https://images.pexels.com/photos/12808985/pexels-photo-12808985.jpeg"
// https://cdn.pixabay.com/photo/2012/11/22/08/18/mecca-66966_1280.jpg