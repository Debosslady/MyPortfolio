import GuestLayout from "@/components/Layouts/GuestLayout"
import { Metadata } from "next" 
import Blog from "./blog-data"

export const metadata: Metadata = {
  title: 'Blog | SoftwareQueen',
  description: 'Welcome to SoftwareQueen Portfolio Blog',
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
