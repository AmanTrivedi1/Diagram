import { ChevronDown, Home, LayoutGridIcon, LogOut, Settings, User, Users } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Separator } from '@/components/ui/separator'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'


export interface TEAM{
  createdBy:String , 
  teamName:String , 
  _id:String,
}

const SideNavTopSection = ({user,setActiveTeamInfo}:any) => {

  const router = useRouter();
  const menu = [
    {
      id:1,
      name:"Create Team" ,
      path:"/teams/create",
      icon:Users
    },
    {
      id:2,
      name:"Go home" ,
      path:"/",
      icon:Home
    },
  ] 

  const convex = useConvex();
  const [activeTeam , setActiveTeam] = useState <TEAM | undefined> ();
  const [teamList , setTeamList] = useState<TEAM[] | undefined>()

  useEffect(()=>{
    activeTeam?setActiveTeamInfo(activeTeam):null
},[activeTeam])


  const getTeamList = async () =>  {
    const result = await convex.query(api.teams.getTeam,{email:user.email})
    setTeamList(result);
    setActiveTeam(result[0]);
    console.log(result , "TeamList")
  }

  const onMenuClick=(item:any) =>{
     if(item.path){
        router.push(item.path);
     }
  }

  useEffect(()=>{
       user && getTeamList();
  }, [user])

console.log(user)
  return (
    <div>
       <Popover>
             <PopoverTrigger>
               <div className='flex gap-x-2    items-center  p-2 rounded-lg  cursor-pointer'>
                  <Image src="/pnglogo.png" width={40} height={40} alt="logo"/>
                   <h1 className='flex line-clamp-1 cursor-pointer font-semibold text-[16px] text-black  items-center gap-x-2'>
                      <p className='line-clamp-1'> {activeTeam?.teamName}</p>
                      <ChevronDown/>
                   </h1>
               </div>
             </PopoverTrigger>
             <PopoverContent className='ml-4 p-4'>
              {/* Team Section*/}
                <div>
                   {teamList?.map ((team, index)=>(
                    <h1 className= {`p-2 cursor-pointer rounded-lg
                    ${activeTeam?._id == team?._id && "bg-black text-white"}`}key={index}
                    onClick={()=>setActiveTeam(team)}
                    >{team.teamName}</h1>
                   ))}
                </div>
                <Separator className='mt-2'/>
                <div>
                 {menu.map((item , index) =>(
                  <h1 className='flex items-center cursor-pointer mt-2 mb-2 hover:bg-black/20 px-2 py-2 rounded-lg  gap-x-4 gap-y-2'
                   onClick={()=>onMenuClick(item)}
                     >
                     <item.icon/>
                     {item.name}
                  </h1>
                  
                 ))}

                 <LogoutLink>
                    <h1 className='flex items-center cursor-pointer mt-2 mb-2 hover:bg-black/20 px-2 py-2 rounded-lg  gap-x-4 gap-y-2'>
                     <LogOut/>
                       Logout
                   </h1>
                  </LogoutLink>
                </div>
                <Separator className='mb-5'/>
                <div>
                   <div className='flex items-center '>
                     <div className='border p-1 border-black/40 rounded-full mr-2'>
                       <User  className=''/>
                     </div>
                     <div>
                       <div>
                         <p className='text-xs text-black'>{user?.given_name} {user?.family_name}</p>
                       </div>
                       <div>
                         <p  className=' text-black/80 text-xs'>{user?.email}</p>
                       </div>
                     </div>
                   </div>


                      

                </div>
             </PopoverContent>
         </Popover>
      {/* All file button */}
      <Button variant="outline" className='w-full mt-8 justify-start gap-2 font-semibold  text-black'>
        <LayoutGridIcon className='h-5 w-5'/> All FIles
      </Button> 
    </div>
  )
}

export default SideNavTopSection
