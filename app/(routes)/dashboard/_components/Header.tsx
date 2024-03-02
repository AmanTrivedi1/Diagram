import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'

import React from 'react'

function Header() {
    const {user}:any=useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>
        <div className='flex gap-2 items-center border rounded-md p-1'>
            <Search className='h-4 w-4 ml-2 '/>
            <input type='text' className='focus:outline-none py-1 ' placeholder='Search'/>
        </div>
        <Button className='gap-2 flex text-sm bg-black
        '> <Send className='h-4 w-4'/> Invite</Button>
    </div>
  )
}

export default Header