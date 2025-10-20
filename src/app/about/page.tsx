import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next"
import About from "./about-data"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to SoftwareQueen About Portfolio',
}

export default function AboutPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < About/> 
      </div>
    </GuestLayout>
  )
}
