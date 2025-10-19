import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next"
import WorkProcess from "./process-data"

export const metadata: Metadata = {
  title: 'SoftwareQueen | Processes',
  description: 'Welcome to Helen Portfolio',
}

export default function Process() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < WorkProcess/>
      </div>
    </GuestLayout>
  )
}
