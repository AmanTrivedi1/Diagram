import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SideNavTopSection from './SideNavTopSection'

  

const SideNav = () => {
  return (
    <>
    <div className='text-zinc-100 h-screen fixed w-80 border-r p-6 gap-3 border-zinc-300'>
      <SideNavTopSection/>
    </div>
    </>
  )
}

export default SideNav
