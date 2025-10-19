import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import ServiceData from "./service-data"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function ServicePage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < ServiceData/> 
      </div>
    </GuestLayout>
  )
}
