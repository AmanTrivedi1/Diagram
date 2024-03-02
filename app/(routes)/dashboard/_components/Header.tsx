import { Button } from '@/components/ui/button';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LogInIcon, Search, Send } from 'lucide-react'

import React from 'react'

function Header() {
    const {user}:any=useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>
       
       <Button variant='destructive' className='flex '>
         <LogoutLink>
            <div className='flex items-center gap-x-1'> Logout <LogInIcon/> <p></p></div>
         </LogoutLink>
      </Button>
       
    </div>
  )
}

export default Header