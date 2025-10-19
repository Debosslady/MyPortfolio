import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import WhatIDo from "./whatIdo-data"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function WhatIDoPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < WhatIDo/> 
      </div>
    </GuestLayout>
  )
}
