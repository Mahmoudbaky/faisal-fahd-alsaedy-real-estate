import React from 'react'
import PropertyTypesSlider from "../PropertyTypesSlider"

const PropertyTypesSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أنواع الأصول العقارية المتخصصون بها</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نقدم خدماتنا المتخصصة في جميع أنواع العقارات لتلبية احتياجاتكم المتنوعة
            </p>
          </div>

          <PropertyTypesSlider />
        </div>
      </section>
  )
}

export default PropertyTypesSection
