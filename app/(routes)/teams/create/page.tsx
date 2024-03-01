"use client"
import Wrapper from '@/app/_components/Wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'


const CreateTeam = () => {
  const [teamName,setTeamName]=useState('');
  const createTeam=useMutation(api.teams.createTeam);
  const {user}:any=useKindeBrowserClient();
  const router=useRouter();
  const createNewTeam=()=>{
    createTeam({
      teamName:teamName,
      createdBy:user?.email
    }).then(resp=>{
      console.log(resp);
      if(resp)
      {
          router.push('/dashboard')
          toast('Team created successfully!!!')
      }
    })
  }
  return (
    <>
    <Wrapper>
        <Image src="/logo.svg" width={100} height={100} alt="logo"/>
        <div className='h-full mt-44 flex-col text-zinc-100 flex items-center justify-center'>
               <p className='text-green-500 mb-2 border flex items-center gap-x-1 border-green-500 px-6 py-1 rounded-full '>Team Name</p>
               <h1 className=' md:text-5xl text-4xl font-semibold'>Whats your team name</h1>
               <p className=' mt-2 text-sm'>You can allways rechange this.</p>
             <div className='mt-7 lg:w-[30%]  md:w-[60%] sm:w-[70%] w-[90%]'>
                 <label className='text-zinc-100 text-xs'>Team Name</label>
                 <Input    onChange={(e)=>setTeamName(e.target.value)}  placeholder='Team Name' className='' />   
             </div>
             <Button 
              disabled={!(teamName&&teamName?.length>0)}
              onClick={()=>createNewTeam()}
             className='mt-4 bg-zinc-100 lg:w-[20%]  md:w-[40%] sm:w-[50%]  w-[40%] text-black hover:text-black hover:bg-zinc-200'>Create Team</Button>
        </div>
    </Wrapper>
    </>
  )
}

export default CreateTeam
