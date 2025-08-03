import { Card, CardHeader, CardTitle , CardContent  , CardDescription} from "../ui/card"
import { Home, Key, TrendingUp, Users } from "lucide-react"
import TiltedCard from "../animations/TiltedCard"

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "تقييم الأصول العقارية",
      description: "تقييم دقيق وشامل لجميع أنواع الأصول العقارية لضمان القيمة الحقيقية",
      bgColor: "bg-accent/20",
      iconColor: "text-accent-foreground"
    },
    {
      icon: Key,
      title: "دراسات الجدوي العقارية",
      description: "دراسات متعمقة للسوق العقاري تساعدك في اتخاذ قرارات استثمارية مستنيرة",
      bgColor: "bg-chart-2/20",
      iconColor: "text-chart-2"
    },
    {
      icon: TrendingUp,
      title: "الاستشارات",
      description: "استشارات متخصصة للاستثمار العقاري المربح والآمن",
      bgColor: "bg-chart-3/20",
      iconColor: "text-chart-3"
    },
    {
      icon: Users,
      title: "التدقيق و المراجعة لتقارير التقييم",
      description: "خدمات التدقيق والمراجعة لضمان الشفافية والمصداقية في جميع المعاملات العقارية",
      bgColor: "bg-chart-4/20",
      iconColor: "text-chart-4"
    }
  ]

  return (
    <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات العقارية لضمان تجربة مثالية لعملائنا
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (<TiltedCard
                  key={index}
                  imageSrc={undefined}
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="320px"
                  imageWidth="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <Card className="w-full h-full text-center hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm border-0">
                      <CardHeader>
                        <div className={`mx-auto ${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                          <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  }
                />
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default ServicesSection
