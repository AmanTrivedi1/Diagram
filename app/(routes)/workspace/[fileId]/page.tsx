"use client"
import React, { useEffect, useState } from 'react'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import WorkspaceHeader from './_components/WorkspaceHeader';
import Editor from './_components/Editor';
import { LoaderIcon } from 'lucide-react';
import Canvas from './_components/Canvas';
// import Canvas from '../_components/Canvas';

function Workspace({params}:any) {
    const [triggerSave,setTriggerSave]=useState(false);
    const convex=useConvex();
    const [loading , setLoading] = useState(false);
    const [fileData,setFileData]=useState<FILE|any>();
    useEffect(()=>{
     console.log("FILEID",params.fileId)
     params.fileId&&getFileData();
    },[])
 
    const getFileData=async()=>{
     setLoading(true);
     const result=await convex.query(api.files.getFileById,{_id:params.fileId})
     setFileData(result);
     setLoading(false);
   }
  return (
    <div>
       <WorkspaceHeader onSave={()=>setTriggerSave(!triggerSave)} />
      {/* Div for WHite board */}
      <div className='grid gird-cols-1 border-b bottom-2 md:grid-cols-2'>
              <div className=' h-screen'>
                {loading ? (
                    <div className='flex items-center flex-col   justify-center mt-40'> <LoaderIcon className='animate-spin' /> <p>Editor Loading..</p> </div>
                ) : <Editor onSaveTrigger={triggerSave}
                 fileId={params.fileId}
                 fileData={fileData}
              />}
               
              </div>
               {/* Dive for canvas */}
        <div className=' h-screen border-l border border-t-2'>
            {loading ? (
                 <div className='flex items-center flex-col justify-center mt-40'> <LoaderIcon className='animate-spin'  /> <p>Whiteboard Loading...</p></div>
            ): (
                <Canvas
                onSaveTrigger={triggerSave}
                fileId={params.fileId}
                fileData={fileData}
               />
            ) }
           
        </div>
      </div>
   
    </div>
  )
}

export default Workspace
