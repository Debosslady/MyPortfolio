import { Metadata } from 'next'   
import GuestLayout from '@/components/Layouts/GuestLayout'
import HomePage from './home-data'
import WorkProcess from './process/process-data'
import About from './about/about-data' 
import Blog from './blog/blog-data'
import ServiceData from './services/service-data' 
import Portfolio from './portfolio/portfolio-data'
import WhatIDo from './whatIdo/whatIdo-data'
import Clients from './clients/client-data'
import Testimony from './testimony/testimony-data'
import Contact from './contact/contact-data'




export const metadata: Metadata = {
  title: 'SoftwareQueen',
  description: 'Welcome to Helen Portfolio',
}

export default function Home() {
  return (
    <GuestLayout >
      <div className="w-full">
        < HomePage/>
        < About/>
        < WorkProcess/>
        < Portfolio/>
        < ServiceData/>
        < Blog/>
        <WhatIDo/>
        {/* <Clients/> */}
        <Testimony/>
        <Contact/>
      </div>
    </GuestLayout>
  )
}
