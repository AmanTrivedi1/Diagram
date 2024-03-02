"use client"
import { Button } from '@/components/ui/button'
import {  LayoutDashboard, Save } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={'/pnglogo.png'}
          alt='logo'
          height={40}
          width={40} />
        <h2 className='font-semibold'>Diagram.io</h2>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant="ghost" className='h-8 text-[12px]
        gap-2 '
        onClick={()=>onSave()}
        > 
        <Save className='h-4 w-4' /> Save </Button>
         <Link href="/dashboard" className='text-[12px] gap-x-2 bg-black text-white px-2 py-1 rounded-lg hover:opacity-90 flex items-center '>
           <LayoutDashboard className='h-4 w-4 ' />   Dashboard
         </Link>
      </div>
    </div>
  )
}

export default WorkspaceHeader