import { Header } from "@/components/Header";
import { AdminSidebar } from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="pl-64"> {/* Add left padding to account for fixed sidebar width */}
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};