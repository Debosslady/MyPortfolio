import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Testimony from "./testimony-data"

export const metadata: Metadata = {
  title: 'Testimonies | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function TestimonyPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Testimony/> 
      </div>
    </GuestLayout>
  )
}
