'use client'
import { ArrowLeft, ArrowRight, CreditCard, DollarSignIcon, History, Home, Settings, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebar } from "@/app/context/sidebarContext"; 

const Sidebar = () => {
    const Menu = [
        {
            name: "Home",
            icon: Home,
            link: "/dashboard"
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
        },
        {
            name: "Transactions",
            icon: CreditCard,
            link: "/dashboard/transactions"
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
                    {isSidebarOpen ? <ArrowLeft /> : <ArrowRight  /> }
                </button>
            </div>
            <div className="mt-10">
                {Menu.map((menu, i) => (
                    <Link href={menu.link} prefetch={false}>
                    <div key={i} className={`flex gap-2 mb-2 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-lg ${path === menu.link ? "bg-primary text-white" : ""}`}>
                        <menu.icon className="w-8 h-8" />
                        <span>{isSidebarOpen&&menu.name}</span>
                       
                    </div>
                    </Link>
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default Sidebar;
