import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
const SideNavTopSection = () => {
  return (
    <div>
      
       <Popover>
             <PopoverTrigger>
               <div className='flex gap-x-2 bg-black/50 hover:bg-black/60  items-center  p-2 rounded-lg  cursor-pointer'>
                  <Image src="./logo.svg" width={100} height={100} alt="logo"/>
                   <h1 className='flex line-clamp-1  font-semibold text-[16px] w-28 truncate items-center gap-x-2'>Team Name
                      <ChevronDown/>
                   </h1>
               </div>
             </PopoverTrigger>
             <PopoverContent>
                
             </PopoverContent>
         </Popover>

       
  
    </div>
  )
}

export default SideNavTopSection
