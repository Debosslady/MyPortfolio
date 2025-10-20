import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next"  
import Contact from "./contact-data"

export const metadata: Metadata = {
  title: 'Contact | SoftwareQueen',
  description: 'Welcome to SoftwareQueen Portfolio Contact',
}

export default function ContactPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Contact/> 
      </div>
    </GuestLayout>
  )
}
