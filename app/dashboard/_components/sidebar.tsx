'use client'
import { ArrowLeft, ArrowRight, DollarSignIcon, History, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebar } from "@/app/context/sidebarContext"; 

const Sidebar = () => {
    const Menu = [
        {
            name: "Home",
            icon: Home,
            link: "/"
        },
        {
            name: "History",
            icon: History,
            link: "/dashboard/history"
        },
        {
            name: "Billings",
            icon: WalletCards,
            link: "/dashboard/billings"
        },
        {
            name: "Settings",
            icon: Settings,
            link: "/dashboard/settings"
        }
    ];

    const path = usePathname();
    const { isSidebarOpen, toggleSidebar } = useSidebar(); 
    useEffect(() => {
    }, [path]);

    return (
        <div className={`p-5 bg-white shadow-sm border h-screen transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
            <div className="flex justify-between items-center border-b">
                {isSidebarOpen && (
                    <span className="text-lg font-semibold text-muted-foreground hover:text-primary">
                        Sidebar
                    </span>
                )}
                <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-gray-200">
                    {isSidebarOpen ? <ArrowLeft w-4 h-4/> : <ArrowRight h-4 w-4 /> }
                </button>
            </div>
            <div className="mt-10">
                {Menu.map((menu, i) => (
                    <div key={i} className={`flex gap-2 mb-2 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-lg ${path === menu.link ? "bg-primary text-white" : ""}`}>
                        <menu.icon />
                        {isSidebarOpen && <h2>{menu.name}</h2>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
