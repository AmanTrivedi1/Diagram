"use client"
import React, { useEffect, useState } from 'react'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import WorkspaceHeader from './_components/WorkspaceHeader';
import Editor from './_components/Editor';
import { LoaderIcon } from 'lucide-react';
import Canvas from './_components/Canvas';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
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
       <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-full"
    >
      <ResizablePanel defaultSize={30}>
     
         {loading ? <div className=' flex items-center justify-center'><LoaderIcon className='animate-spin mt-40' /> </div> : 
         <Editor onSaveTrigger={triggerSave}
         fileId={params.fileId}
         fileData={fileData}/>
         }
    
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
    
      {loading ? <div className=' flex items-center justify-center'><LoaderIcon className='animate-spin mt-40' /> </div> : 
             <Canvas
                onSaveTrigger={triggerSave}
                fileId={params.fileId}
                fileData={fileData}
               />
              }
   
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  )
}

export default Workspace
