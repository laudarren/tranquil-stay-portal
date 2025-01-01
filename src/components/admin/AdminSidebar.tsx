import { NavLink } from "react-router-dom";
import { Building2, List, Plus, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export const AdminSidebar = () => {
  const menuItems = [
    {
      title: "Properties List",
      icon: List,
      href: "/admin",
    },
    {
      title: "Add Property",
      icon: Plus,
      href: "/list-property",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Building2 className="h-6 w-6" />
        <span className="font-semibold text-lg">Admin Dashboard</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-2 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};