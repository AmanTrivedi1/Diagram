"use client"
import Wrapper from '@/app/_components/Wrapper'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import React, { useEffect } from 'react'
import Header from './_components/Header'
import FileList from './_components/FileList'
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
   <div className='sm:p-4 sm:ml-4'>
       <Header/>

       <FileList/>
   </div>
  </>
  )
}

export default Dashboard
