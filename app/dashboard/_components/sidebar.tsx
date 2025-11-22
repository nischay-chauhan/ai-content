"use client";
import {
    ArrowLeft,
    ArrowRight,
    CreditCard,
    History,
    Home,
    Settings,
    WalletCards,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebar } from "@/app/context/sidebarContext";
import { motion } from "framer-motion";

const Sidebar = () => {
    const Menu = [
        {
            name: "Home",
            icon: Home,
            link: "/dashboard",
        },
        {
            name: "History",
            icon: History,
            link: "/dashboard/history",
        },
        {
            name: "Billings",
            icon: WalletCards,
            link: "/dashboard/billings",
        },
        {
            name: "Settings",
            icon: Settings,
            link: "/dashboard/settings",
        },
        {
            name: "Transactions",
            icon: CreditCard,
            link: "/dashboard/transactions",
        },
    ];

    const path = usePathname();
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <motion.div
            animate={{ width: isSidebarOpen ? 280 : 80 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            className="h-screen bg-white border-r border-gray-100 shadow-lg relative z-50 flex flex-col"
        >
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                    >
                        <div className="bg-gradient-to-r from-violet-600 to-rose-600 p-1.5 rounded-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
                            AI Content
                        </span>
                    </motion.div>
                )}
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-full hover:bg-violet-50 text-gray-500 hover:text-violet-600 transition-colors"
                >
                    {isSidebarOpen ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </button>
            </div>

            <div className="flex-1 py-6 px-4 space-y-2">
                {Menu.map((menu, i) => {
                    const isActive = path === menu.link;
                    return (
                        <Link key={i} href={menu.link} prefetch={false}>
                            <div
                                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer group ${isActive
                                        ? "bg-gradient-to-r from-violet-600 to-rose-600 text-white shadow-md"
                                        : "hover:bg-violet-50 text-gray-600 hover:text-violet-600"
                                    }`}
                            >
                                <menu.icon
                                    className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-500 group-hover:text-violet-600"
                                        }`}
                                />
                                {isSidebarOpen && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="font-medium"
                                    >
                                        {menu.name}
                                    </motion.span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {isSidebarOpen && (
                <div className="p-6 border-t border-gray-100">
                    <div className="bg-gradient-to-br from-violet-50 to-rose-50 p-4 rounded-xl border border-violet-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-violet-600" />
                            <span className="text-sm font-semibold text-violet-900">
                                Pro Plan
                            </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">
                            Get unlimited access to all AI tools.
                        </p>
                        <button className="w-full py-2 text-xs font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Sidebar;
