import { Card, CardHeader, CardTitle , CardContent  , CardDescription} from "../ui/card"
import { Home, Key, TrendingUp, Users } from "lucide-react"

const ServicesSection = () => {
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl"> تقييم الأصول العقارية</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  تقييم دقيق وشامل لجميع أنواع الأصول العقارية لضمان القيمة الحقيقية
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-chart-2/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Key className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl"> دراسات الجدوي العقارية</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  دراسات متعمقة للسوق العقاري تساعدك في اتخاذ قرارات استثمارية مستنيرة
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-chart-3/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-chart-3" />
                </div>
                <CardTitle className="text-xl"> الاستشارات</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  استشارات متخصصة للاستثمار العقاري المربح والآمن
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-chart-4/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-chart-4" />
                </div>
                <CardTitle className="text-xl"> التدقيق و المراجعة لتقارير التقييم</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  خدمات التدقيق والمراجعة لضمان الشفافية والمصداقية في جميع المعاملات العقارية
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ServicesSection
