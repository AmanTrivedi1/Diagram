"use client"
import { useState, useEffect } from 'react';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import SideNav from './_components/SideNav';
import { FileListContext } from '@/app/_context/FileListContext';
import { AlignCenter, X } from 'lucide-react';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const convex = useConvex();
    const { user }: any = useKindeBrowserClient();
    const [fileList_, setFileList_] = useState();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar open/close

    useEffect(() => {
        user && checkTeam();
    }, [user]);

    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email });

        if (!result?.length) {
            router.push('teams/create');
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <FileListContext.Provider value={{ fileList_, setFileList_ }}>
                <div className={`grid grid-cols-4 ${isSidebarOpen ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                    {/* Sidebar */}
                    <div className={`bg-white h-screen w-72 fixed ${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
                        <SideNav />
                    </div>
                    {/* Content */}
                    <div className={`col-span-full sm:ml-72  ${isSidebarOpen ? 'ml-0' : ''}`}>
                        {children}
                    </div>
                    {/* Toggle Button (for smaller screens) */}
                    <button
                        className="sm:hidden fixed bottom-4 right-4 z-50 bg-black text-white rounded-full p-2"
                        onClick={toggleSidebar}
                    >
                     {isSidebarOpen ? <X /> : <AlignCenter />}
                    </button>
                </div>
            </FileListContext.Provider>
        </>
    );
}
