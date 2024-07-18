import { DollarSignIcon, History, Home, Settings, WalletCards } from "lucide-react"

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
    return (
        <div className="p-5 shadow-sm border h-screen">
            <div className="flex justify-center border-b">
                <span className="text-lg font-semibold text-muted-foreground hover:text-primary">Sidebar</span>
            </div>
            <div className="mt-10">
                {Menu.map((menu , i) => (
                    <div className="flex gap-2 mb-2 p-3 hover:bg-primary cursor-pointer hover:text-white rounded-lg">
                        <menu.icon />
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar