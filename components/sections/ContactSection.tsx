import { Phone , Mail  , MapPin} from "lucide-react"
import { Card} from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const ContactSection = () => {
  return (
    <div className="relative  border-none overflow-hidden">
      <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
         backgroundImage:
              'url("https://images.pexels.com/photos/30320203/pexels-photo-30320203.png")',
      }}/>
      <div className="absolute inset-0 bg-primary/70"/>
    <section id="contact" className="py-20  text-primary-foreground z-10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في جميع احتياجاتك العقارية. تواصل معنا اليوم
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">الهاتف</h4>
                    <p className="text-blue-100">+966 11 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">البريد الإلكتروني</h4>
                    <p className="text-blue-100">info@gulf-realestate.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">العنوان</h4>
                    <p className="text-blue-100">مكة المكرمة، حي السلامة </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">أرسل رسالة</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="الاسم الأول" className="text-right" />
                    <Input placeholder="الاسم الأخير" className="text-right" />
                  </div>
                  <Input type="email" placeholder="البريد الإلكتروني" className="text-right" />
                  <Input placeholder="رقم الهاتف" className="text-right" />
                  <textarea
                    placeholder="رسالتك"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md text-right resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                  >
                    إرسال الرسالة
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
