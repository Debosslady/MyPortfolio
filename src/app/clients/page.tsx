import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Clients from "./client-data"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function ClientsPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Clients/> 
      </div>
    </GuestLayout>
  )
}
