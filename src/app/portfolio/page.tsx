import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Portfolio from "./portfolio-data"

export const metadata: Metadata = {
  title: 'Portfolio | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function PortfolioPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Portfolio/> 
      </div>
    </GuestLayout>
  )
}
