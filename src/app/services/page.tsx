import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import ServiceData from "./service-data"

export const metadata: Metadata = {
  title: 'Services| SoftwareQueen',
  description: 'Welcome to SoftwareQueen Services',
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
