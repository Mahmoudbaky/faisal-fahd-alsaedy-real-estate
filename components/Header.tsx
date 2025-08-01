'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
// import { NAVIGATION_ITEMS, CONTACT_INFO } from '@/lib/constants'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  

  return (
    <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
             <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className="header-nav-link text-muted-foreground hover:text-primary font-medium">
                الرئيسية
              </Link>
              <Link href="#services" className="header-nav-link text-muted-foreground hover:text-primary font-medium">
                خدماتنا
              </Link>
              <Link href="#properties" className="header-nav-link text-muted-foreground hover:text-primary font-medium">
                العقارات
              </Link>
              <Link href="#about" className="header-nav-link text-muted-foreground hover:text-primary font-medium">
                من نحن
              </Link>
              <Link href="#contact" className="header-nav-link text-muted-foreground hover:text-primary font-medium">
                اتصل بنا
              </Link>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="h-4 w-4 ml-2" />
              اتصل الآن
            </Button>
          </div>
        </div>
      </header>
  )
}

export default Header
