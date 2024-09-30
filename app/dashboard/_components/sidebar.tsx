'use client'
import { DollarSignIcon, History, Home, Settings, WalletCards } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const Sidebar = () => {
    const Menu = [
        {
            name: "Home",
            icon : Home,
            link: "/"
        },
        {
            name : "History",
            icon : History,
            link : "/dashboard/history"
        },
        {
            name : "Billings",
            icon : WalletCards,
            link : "/dashboard/billings"
        },
        {
            name : "Settings",
            icon : Settings,
            link : "/dashboard/settings"
        }
    ]

    const path = usePathname();
    useEffect(() => {
    })
    return (
        <div className="p-5 bg-white shadow-sm border h-screen">
            <div className="flex justify-center border-b">
                <span className="text-lg font-semibold text-muted-foreground hover:text-primary">Sidebar</span>
            </div>
            <div className="mt-10">
                {Menu.map((menu , i) => (
                    <div key={i} className={`flex gap-2 mb-2 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-lg ${path === menu.link ? "bg-primary text-white" : ""}`}>
                      
                       <menu.icon />
                       <h2>{menu.name}</h2>
                      
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar