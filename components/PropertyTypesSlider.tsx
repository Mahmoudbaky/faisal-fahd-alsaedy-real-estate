"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Building, Home, Building2, Hotel, Warehouse } from "lucide-react"
import PixelTransition from "@/components/animations/PixelTransition"

const propertyTypes = [
	{
		id: 1,
		name: "العقارات السكنية",
		icon: Hotel,
		description: "أبراج سكنية وتجارية حديثة",
		gradient: "from-teal-400 to-green-500",
		image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", // Add image paths
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
	}
]

export default function PropertyTypesSlider() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const itemsPerView = 4
	const maxIndex = Math.max(0, propertyTypes.length - itemsPerView)

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
	}

	return (
		<div className="relative">
			{/* Navigation Buttons */}
			<div className="flex gap-2 mb-8">
				<Button
					onClick={prevSlide}
					variant="outline"
					size="icon"
					className="bg-white/10 border-white/20 text-white hover:bg-white/20"
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
				<Button
					onClick={nextSlide}
					variant="outline"
					size="icon"
					className="bg-white/10 border-white/20 text-white hover:bg-white/20"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
			</div>

			{/* Slider Container */}
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-500 ease-in-out gap-6"
					style={{
						transform: `translateX(${currentIndex * (100 / itemsPerView)}%)`,
						width: `${(propertyTypes.length / itemsPerView) * 100}%`,
					}}
				>
					{propertyTypes.map((type) => {
						const IconComponent = type.icon
						return (
							<div
								key={type.id}
								className="flex-shrink-0"
								style={{ width: `${100 / propertyTypes.length}%` }}
							>
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
													<h3 className="text-2xl font-bold mb-2">
														{type.name}
													</h3>
													<p className="text-sm opacity-90">
														{type.description}
													</p>
												</div>
											</div>
										</div>
									}
									flipDuration={0.8}
								/>
							</div>
						)
					})}
				</div>
			</div>

			{/* Dots Indicator */}
			<div className="flex justify-center mt-8 gap-2">
				{Array.from({ length: maxIndex + 1 }).map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							currentIndex === index
								? "bg-white scale-125"
								: "bg-white/40 hover:bg-white/60"
						}`}
					/>
				))}
			</div>
		</div>
	)
}
