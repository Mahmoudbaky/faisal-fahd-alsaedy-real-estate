"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Building2, Hotel, Warehouse } from "lucide-react";
import PixelTransition from "@/components/animations/PixelTransition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const propertyTypes = [
  {
    id: 1,
    name: "العقارات السكنية",
    icon: Hotel,
    description: "أبراج سكنية وتجارية حديثة",
    gradient: "from-teal-400 to-green-500",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 2,
    name: "العقارات التجارية",
    icon: Building,
    description: "فلل فاخرة مع حدائق خاصة",
    gradient: "from-blue-400 to-blue-600",
    image: "https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg",
  },
  {
    id: 3,
    name: "العقارات الصناعية",
    icon: Building2,
    description: "مجمعات سكنية وتجارية متكاملة",
    gradient: "from-purple-400 to-purple-600",
    image: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
  },
  {
    id: 4,
    name: "العقارات الزراعية",
    icon: Home,
    description: "شقق سكنية بمختلف الأحجام",
    gradient: "from-orange-400 to-red-500",
    image: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg",
  },
  {
    id: 5,
    name: "العقارات العامة",
    icon: Warehouse,
    description: "فنادق فاخرة ومنتجعات سياحية",
    gradient: "from-indigo-400 to-indigo-600",
    image: "https://images.pexels.com/photos/7078481/pexels-photo-7078481.jpeg",
  },
  {
    id: 6,
    name: "العقارات ذات الطراز الحديث",
    icon: Building2,
    description: "أراضي سكنية وتجارية للبيع",
    gradient: "from-gray-400 to-gray-600",
    image: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg",
  },
  {
    id: 7,
    name: "العقارات التقليدية",
    icon: Warehouse,
    description: "عمائر سكنية وتجارية في مواقع مميزة",
    gradient: "from-yellow-400 to-orange-500",
    image: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg",
  },
];

export default function PropertyTypesSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="property-types-swiper"
      >
        {propertyTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <SwiperSlide key={type.id}>
              <PixelTransition
                frontContent={
                  <Card className="bg-white hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div
                        className={`mx-auto w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <IconComponent className="h-16 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {type.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {type.description}
                      </p>
                    </CardContent>
                  </Card>
                }
                backContent={
                  <div className="relative w-full h-full overflow-hidden rounded-[15px]">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                        <p className="text-sm opacity-90">{type.description}</p>
                      </div>
                    </div>
                  </div>
                }
                flipDuration={0.8}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !text-white !bg-gradient-to-r !from-primary !to-primary/80 !border-0 !rounded-full !w-14 !h-14 !mt-0 !top-1/2 !-translate-y-1/2 !left-4 hover:!from-primary/90 hover:!to-primary/70 !shadow-xl !backdrop-blur-sm transition-all duration-300 !after:text-xl !after:font-bold hover:!scale-110"></div>
      <div className="swiper-button-next !text-white !bg-gradient-to-r !from-primary !to-primary/80 !border-0 !rounded-full !w-14 !h-14 !mt-0 !top-1/2 !-translate-y-1/2 !right-4 hover:!from-primary/90 hover:!to-primary/70 !shadow-xl !backdrop-blur-sm transition-all duration-300 !after:text-xl !after:font-bold hover:!scale-110"></div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .property-types-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        .property-types-swiper .swiper-pagination-bullet {
          background: rgba(0, 0, 0, 0.3) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          width: 12px !important;
          height: 12px !important;
        }
        .property-types-swiper .swiper-pagination-bullet:hover {
          background: rgba(0, 0, 0, 0.5) !important;
        }
        .property-types-swiper .swiper-pagination-bullet-active {
          background: var(--primary) !important;
          transform: scale(1.25) !important;
        }

        /* Enhanced navigation arrows */
        .property-types-swiper .swiper-button-next,
        .property-types-swiper .swiper-button-prev {
          border: 2px solid rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(10px) !important;
          z-index: 10 !important;
        }

        .property-types-swiper .swiper-button-next:after,
        .property-types-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: 900 !important;
          color: white !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }

        .property-types-swiper .swiper-button-next:hover:after,
        .property-types-swiper .swiper-button-prev:hover:after {
          color: white !important;
          transform: scale(1.1) !important;
        }

        .property-types-swiper .swiper-button-disabled {
          opacity: 0.4 !important;
          cursor: not-allowed !important;
        }

        .property-types-swiper .swiper-button-disabled:hover {
          transform: none !important;
        }

        /* Add glow effect on hover */
        .property-types-swiper .swiper-button-next:hover,
        .property-types-swiper .swiper-button-prev:hover {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.6) !important;
        }

        /* Smooth animations */
        .property-types-swiper .swiper-button-next,
        .property-types-swiper .swiper-button-prev {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  );
}
