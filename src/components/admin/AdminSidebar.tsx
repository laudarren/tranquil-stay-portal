import { NavLink } from "react-router-dom";
import { Building2, List, Plus, Settings, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-2 mb-8 px-2">
        <Building2 className="h-6 w-6" />
        <span className="font-semibold text-lg">Admin Dashboard</span>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={() => setIsOpen(false)}
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
    </>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 w-64 bg-white border-r h-screen p-4">
        <SidebarContent />
      </aside>
    </>
  );
};