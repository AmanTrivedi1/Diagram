"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import React from 'react'

const Header = () => {
  return (
    <div>
    <header className="bg-black">
  <div className="mx-auto flex h-16 max-w-screen-xl justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
    <div className='flex items-center'>
        <Image src="./logo.svg" width={100} height={100} alt="Logo" />
    </div>
        <div className="sm:flex sm:gap-4">
          <Button className='bg-white text-black hover:bg-white hover:text-black'>Login</Button>
          <Button className=' bg-white text-black hover:bg-white hover:text-black hidden sm:block'>Register</Button>
        </div>
</div>
</header>
    </div>
  )
}

export default Header
