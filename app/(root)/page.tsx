import {HeroSection , AboutSection , ServicesSection , PropertyTypesSection , ContactSection , RealEstateAppraisalPurposes} from "@/components/sections"


const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PropertyTypesSection />
      <ServicesSection />
      <RealEstateAppraisalPurposes />
      <ContactSection/>
      {/* <ContactSection /> */}
    </div>
  )
}


export default page
