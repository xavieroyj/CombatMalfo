"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from '@/app/images/logowhite.png'
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname();
  const isDashboardRoute = pathname.includes("dashboard");

  if (isDashboardRoute) {
    return null; // Do not render the Navbar if the route includes "dashboard"
  }

  return (
    <nav className="bg-black shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={80} height={80} className="-mr-3" />
            <span className="text-2xl font-bold text-white">CombatMalfoy</span>
          </div>
        </Link>
        <div>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
} 