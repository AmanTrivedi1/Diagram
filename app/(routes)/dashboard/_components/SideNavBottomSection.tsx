import { Button } from '@/components/ui/button'
import { Archive, Flag, Github } from 'lucide-react'
import React, { useState } from 'react'
import Constant from '@/app/_constant/Constant'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'

function SideNavBottomSection({onFileCreate,totalFiles}:any) {
  const menuList=[
    {
      id:1,
      name:'Getting Started',
      icon:Flag,
      path:''
    },
    {
      id:2,
      name:'Github',
      icon:Github,
      path:''
    },
    {
      id:3,
      name:'Archive',
      icon:Archive,
      path:''
    }
  ]
  const [fileInput,setFileInput]=useState('');
  return (
    <div className='text-black'>
      {menuList.map((menu,index)=>(
        <h2 key={index} className='flex gap-2 p-2 px-2 text-[14px] 
        hover:bg-gray-100 rounded-md cursor-pointer'>
          <menu.icon className='h-5 w-5'/>
          {menu.name}</h2>
      ))}

      {/* Add New File Button  */}
      <Dialog>
  <DialogTrigger className='w-full' asChild>

  <Button className='w-full bg-black
       justify-start mt-3'>New File</Button>
  </DialogTrigger>

  {totalFiles < Constant.MAX_FREE_FILE ?  
    <DialogContent>
    <DialogHeader>
      <DialogTitle>
        <Button  disabled={totalFiles >= Constant.MAX_FREE_FILE}> Create New File</Button>
       </DialogTitle>
      <DialogDescription>
          <Input placeholder='Enter File Name' 
          className='mt-3'
          onChange={(e)=>setFileInput(e.target.value)}
          />
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" 
            className='bg-black'
            disabled={!(fileInput&&fileInput.length>3)}
            onClick={()=>onFileCreate(fileInput)}
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent> 
  :
  <>
  <Drawer>
   <div className='flex items-center text-xs'>
     <p>Can not create more than 5  <DrawerTrigger className='text-blue-600'>Why ?</DrawerTrigger></p>
   </div>
  <DrawerContent className='max-w-[800px] m-auto'>
    <DrawerHeader>
      <DrawerTitle>Why you can not create more than 5 files ?</DrawerTitle>
  <DrawerDescription className=''> <span className='text-red-400 font-semibold'>Notice</span>: You have reached the maximum file limit allowed for this service.
           As a free user, you can create up to 5 files. 
           If you need to create more files, please delete some existing files to make room.
           Thank you for using our service and understanding the limitations.
 </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button className=' w-full md:w-1/2' variant="default">Got it</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
 
  </>
}


 
</Dialog>
      {/* Progress Bar  */}
      <div className='h-4 w-full bg-gray-200 rounded-full mt-5'>
          <div className={`h-4  bg-black rounded-full`}
          style={{ width: `${(totalFiles/5)*100}%` }}>
          </div>
      </div>
      <h2 className='text-[12px] mt-3'>
        <strong>{totalFiles}</strong> out of <strong>{Constant.MAX_FREE_FILE}</strong> files used</h2>
      <h2 className='text-[12px] mt-1'>Upgrade your plan for unlimited access.</h2> 
     </div>
  )
}

export default SideNavBottomSection