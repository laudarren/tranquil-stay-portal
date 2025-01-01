import { Header } from "@/components/Header";
import { AdminSidebar } from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex w-full">
      <AdminSidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};