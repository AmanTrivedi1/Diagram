import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink , RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export function Hero() {
  return (
    <>
 
    <div className="h-[40rem] w-full  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="">
              <div className="absolute top-8 md:left-20 left-10">
                <Image src="./logo.svg" height={100} width={100} alt="Image" />
              </div>
              <div className="absolute top-4 md:right-20 right-10">
                <Button className="bg-zinc-200 hover:bg-zinc-100 text-black hover:text-black">
                   <LoginLink>Try now</LoginLink>
                </Button>
              </div>
             
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
            <div className="flex items-center  flex-col justify-center mt-4">
              <Button className="bg-zinc-200 hover:bg-zinc-100 text-black hover:text-black ">
                <RegisterLink>Signup Now</RegisterLink>
              </Button>
            </div>
       </div>
      </div>
   
    </div>
    </>
  );
}
