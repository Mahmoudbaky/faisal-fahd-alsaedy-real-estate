import React from 'react'
import { Scale, ShieldCheck, Banknote, Handshake, Calculator, Filter, LineChart } from "lucide-react"
import { Badge } from "../ui/badge"


const RealEstateAppraisalPurposes = () => {
  const valuationPurposes = [
    {
      id: 1,
      title: "أغراض قانونية",
      icon: Scale,
      description: "لحل النزاعات، تقسيم الميراث، أو لأغراض المحاكم.",
    },
    {
      id: 2,
      title: "التأمين",
      icon: ShieldCheck,
      description: "تحديد قيمة العقار لأغراض التأمين ضد المخاطر.",
    },
    {
      id: 3,
      title: "الرهن والتمويل",
      icon: Banknote, // Changed to Banknote for better representation of financing
      description: "تحديد قيمة الضمان للعقارات المرهونة أو لأغراض التمويل البنكي.",
    },
    {
      id: 4,
      title: "الشراء والبيع",
      icon: Handshake, // Changed to Handshake for better representation of buying/selling
      description: "تحديد السعر العادل للعقار قبل عمليات الشراء أو البيع.",
    },
    {
      id: 5,
      title: "أغراض محاسبية",
      icon: Calculator,
      description: "لإعداد التقارير المالية، تقييم الأصول، أو لأغراض الضرائب.",
    },
    {
      id: 6,
      title: "التصفية",
      icon: Filter,
      description: "تحديد قيمة العقار في حالات التصفية أو الإفلاس.",
    },
    {
      id: 7,
      title: "أغراض استثمارية",
      icon: LineChart,
      description: "لتقييم العوائد المحتملة للعقارات الاستثمارية.",
    },
  ]


  return (
    <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">أهم أغراض التقييم</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم خدمات التقييم العقاري لمجموعة واسعة من الأغراض لضمان دقة وشفافية معاملاتكم
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuationPurposes.map((purpose) => {
              const IconComponent = purpose.icon
              return (
                <div key={purpose.id} className="flex flex-col items-center text-center p-6">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                    {/* Background blob shape */}
                    <div className="blob-shape" />
                    <div className="absolute inset-0 bg-primary/5 rounded-full" />
                    <IconComponent className="h-16 w-16 text-primary relative z-10" />
                  </div>
                  <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-6 py-2 rounded-full">
                    {purpose.title}
                  </Badge>
                  
                </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default RealEstateAppraisalPurposes
