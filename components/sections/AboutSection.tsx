import { Button } from "../ui/button"
import Image from "next/image"
import { Home , Phone } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4614473/pexels-photo-4614473.jpeg"
                alt="فريق العمل"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-[600px] h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">من نحن</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
           شركة فيصل فهد الصاعدي للتقييم العقاري شركة سعودية متخصصة في خدمات تقييم الأصول العقارية والدراسات العقارية ومعتمدة من قبل الهيئة السعودية للمقيمين المعتمدين " تقييم" .
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
شركة فيصل فهد الصاعدي للتقييم العقاري على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة تلبي احتياجاتهم و طموحاتهم .​
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
