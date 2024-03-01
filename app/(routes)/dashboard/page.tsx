"use client"
import Wrapper from '@/app/_components/Wrapper'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import React, { useEffect } from 'react'
const Dashboard = () => {
    
    const convex=useConvex();
    const {user}:any=useKindeBrowserClient();
    //const getUser=useQuery(api.user.getUser,{email:user?.email});
  
    const createUser=useMutation(api.user.createUser);
  useEffect(()=>{
      if(user)
      {
        checkUser()
      }
  },[user])
  
  const checkUser=async()=>{
    const result=await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length)
    {
        createUser({
          name:user.given_name,
          email:user.email,
        }).then((resp)=>{
          console.log(resp)
        })
    }

  }
  return (
  <>
      
          <>
            <Button className='bg-white hidden text-black hover:bg-zinc-100 hover:text-black'>
                <LogoutLink>Logout</LogoutLink>
            </Button>
          </>
    
       
  </>
  )
}

export default Dashboard
