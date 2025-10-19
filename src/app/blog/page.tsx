import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Blog from "./blog-data"

export const metadata: Metadata = {
  title: 'About | SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function BlogPage() {
  return (
    <GuestLayout >
      <div className="w-full"> 
        < Blog/> 
      </div>
    </GuestLayout>
  )
}
