'use client'
import Image from "next/image"
import  {motion}  from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ margin: "-100px" , once: true }} // Animations will trigger every time you scroll to this section
            >
              <Image
                src="https://images.pexels.com/photos/4614473/pexels-photo-4614473.jpeg"
                alt="فريق العمل"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-[600px] h-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px", once: true }} // Animations will trigger every time you scroll to this section
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                من نحن
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
           شركة فيصل فهد الصاعدي للتقييم العقاري شركة سعودية متخصصة في خدمات تقييم الأصول العقارية والدراسات العقارية ومعتمدة من قبل الهيئة السعودية للمقيمين المعتمدين " تقييم" .
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
شركة فيصل فهد الصاعدي للتقييم العقاري على الرغم من حداثتها الا أنها استطاعت كسب ثقة عملائها لتصبح رائدة في مجال تقييم الأصول العقارية والدراسات في المملكة وذلك لأننا نعتمد على نخبة من المتخصصين في مجال التقييم والدراسات ذوي خبرة عريقة و مستوى رفيع من الكفاءة و المصداقية قادرين على خدمة العملاء بطريقة تلبي احتياجاتهم و طموحاتهم .​
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
