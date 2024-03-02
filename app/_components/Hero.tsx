import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink , RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export function Hero() {
  const {user}:any=useKindeBrowserClient();
  return (
    <>
 
    <div className="h-[100vh] w-full  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="">
              <div className="absolute text-white font-semibold flex md:top-8 top-4 md:left-20 left-4">
                <Image src="/pnglogo.png" height={40} width={40} alt="Image" />
                <h1 className="ml-2">Diagram.io</h1>
              </div>
            {
              user ? <Link href="/dashboard"><div className="absolute md:top-4 top-2 md:right-20 right-4 max-w-40 truncate"><h1 className="text-white md:text-sm text-xs">{user?.given_name}/Dashboard</h1></div></Link>  :  
              <div className="absolute md:top-4 top-2 md:right-20 right-4">
                <Button className="bg-zinc-200 hover:bg-zinc-100 text-black hover:text-black">
                   <LoginLink>Try now</LoginLink>
                </Button>
              </div>
            }
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full sm:pt-20 pt-32 md:pt-0">
          <div className="flex items-center justify-center">
             <p className="border px-6 rounded-full inline-flex items-center justify-center mb-3 text-green-400 border-green-400">Make Diagram</p>
          </div>
             <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Diagram.io <br /> 
             </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
               Welcome to our revolutionary platform designed to streamline your project documentation process.
               With our intuitive interface, you can effortlessly create detailed flow diagrams, charts,
               and much more. Say goodbye to scattered notes and disjointed planning – our tool empowers you
               to consolidate your ideas into cohesive, professional documents. 
            </p>
            {user ?   <div className="text-lg flex items-center justify-center mt-4 text-orange-500">  <Link href="/dashboard"><span className="text-[#EF305C]">{user?.given_name}</span><span className="text-[#2F9BFD]">/Dashboard</span> </Link>   </div> : 
             <div className="flex items-center  flex-col justify-center mt-4">
             <Button className="bg-zinc-200 hover:bg-zinc-100 text-black hover:text-black ">
               <RegisterLink>Signup Now</RegisterLink>
             </Button>
           </div>
            }
           
       </div>
      </div>
   
    </div>
    </>
  );
}
