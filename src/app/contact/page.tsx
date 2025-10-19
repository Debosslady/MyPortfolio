import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import { Contact } from "lucide-react"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function AboutPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Contact/> 
      </div>
    </GuestLayout>
  )
}
