

import React, {  useContext, useEffect, useState } from 'react'
import SideNavTopSection, { TEAM } from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottomSection from './SideNavBottomSection'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { FileListContext } from '@/app/_context/FileListContext'


  

const SideNav = () => {

  const {user}:any=useKindeBrowserClient();
  const createFile=useMutation(api.files.createFile);
  const [activeTeam,setActiveTeam]=useState<TEAM|any>();
  const convex=useConvex();
  const [totalFiles,setTotalFiles]=useState<Number>();
  const {fileList_, setFileList_} =useContext(FileListContext);


  useEffect(()=>{
    activeTeam&&getFiles();
  },[activeTeam])


  const onFileCreate=(fileName:string)=>{
    console.log(fileName)
    createFile({
      fileName:fileName,
      teamId:activeTeam?._id,
      createdBy:user?.email,
      archive:false,
      document:'',
      whiteboard:''
    }).then(resp=>{
      if(resp)
      {
        getFiles();
        toast('File created successfully!')
      }
    },(e)=>{
      toast('Error while creating file')
    })
  }
  const getFiles=async()=>{
    const result=await convex.query(api.files.getFiles,{teamId:activeTeam?._id});
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length)
  }
 
  return (
    <>
    <div className='text-zinc-100 h-screen fixed md:w-80 w-72 border-r p-6 gap-3 border-zinc-300 flex-col flex'>
      <div className='flex-1 '>
        <SideNavTopSection user={user}
         setActiveTeamInfo={(activeTeam:TEAM)=>setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SideNavBottomSection
          totalFiles={totalFiles}
          onFileCreate={onFileCreate}
        />
      </div>
    </div>
    </>
  )
}

export default SideNav