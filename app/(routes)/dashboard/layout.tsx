"use client"
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function DashboardLayout({children,}: Readonly<{ children: React.ReactNode;}>) 
{
    const convex=useConvex();
    const {user}:any=useKindeBrowserClient();
    const [fileList_,setFileList_]=useState();
    const router=useRouter();
    useEffect(()=>{ 
        user&&checkTeam();
    },[user])
    const checkTeam=async()=>{
        const result=await convex.query(api.teams.getTeam,
            {email:user?.email});

        if(!result?.length)
        {
            router.push('teams/create')
        }
    }
    return (
        <div className='bg-black'>{children}</div>
    );
}
