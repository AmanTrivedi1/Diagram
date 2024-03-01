"use client"
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";

import Wrapper from "./_components/Wrapper";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
  const {user} = useKindeBrowserClient();

  useEffect(() => {
     console.log(user)
  },[user])

  return (
     <div className="bg-black">
         <Header/>
        <Hero/>
     </div>
  );
}
