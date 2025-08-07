import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { Home, Key, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "تقييم الأصول العقارية",
      description:
        "تقييم دقيق وشامل لجميع أنواع الأصول العقارية لضمان القيمة الحقيقية",
      bgColor: "bg-accent/20",
      iconColor: "text-accent-foreground",
    },
    {
      icon: Key,
      title: "دراسات الجدوي العقارية",
      description:
        "دراسات متعمقة للسوق العقاري تساعدك في اتخاذ قرارات استثمارية مستنيرة",
      bgColor: "bg-chart-2/20",
      iconColor: "text-chart-2",
    },
    {
      icon: TrendingUp,
      title: "الاستشارات",
      description: "استشارات متخصصة للاستثمار العقاري المربح والآمن",
      bgColor: "bg-chart-3/20",
      iconColor: "text-chart-3",
    },
    {
      icon: Users,
      title: "التدقيق و المراجعة لتقارير التقييم",
      description:
        "خدمات التدقيق والمراجعة لضمان الشفافية والمصداقية في جميع المعاملات العقارية",
      bgColor: "bg-chart-4/20",
      iconColor: "text-chart-4",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات العقارية لضمان تجربة مثالية لعملائنا
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="h-[280px] text-center bg-white/95 backdrop-blur-sm border-0 flex flex-col p-5 
                          transition-all duration-300 ease-in-out
                          hover:shadow-xl hover:shadow-primary/10
                          hover:scale-105 hover:-translate-y-2
                          cursor-pointer group"
              >
                <div className="flex flex-col items-center mb-3">
                  <div
                    className={`mx-auto ${service.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-3
                              transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <IconComponent
                      className={`h-7 w-7 ${service.iconColor} transition-all duration-300 group-hover:scale-110`}
                    />
                  </div>
                  <CardTitle className="text-base mb-3 leading-tight transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </div>
                <div className="flex-1 flex items-start">
                  <CardDescription className="text-gray-600 text-center text-sm leading-snug transition-colors duration-300 group-hover:text-gray-700">
                    {service.description}
                  </CardDescription>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
