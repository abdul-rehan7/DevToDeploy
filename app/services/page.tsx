import Hero from '@/components/Hero'
import React from 'react'
import {Cards}  from '@/components/Services'

const Services = () => {
  return (
    <div className='bg-[var(--primary)] flex flex-col items-center'>
      <Hero  title='Our Services' description='We offer a range of professional services designed to meet your needs. From custom development and design to expert consulting, our services are crafted to deliver results and exceed expectations.' image="/hero.jpg"/>
    <div className="heading py-7">
      What we Offer
    </div>
      <Cards/>
    </div>
  )
}

export default Services
