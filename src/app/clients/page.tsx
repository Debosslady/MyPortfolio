import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Clients from "./client-data"

export const metadata: Metadata = {
  title: 'Client | SoftwareQueen',
  description: 'Welcome to SoftwareQueen Portfolio Clients',
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
