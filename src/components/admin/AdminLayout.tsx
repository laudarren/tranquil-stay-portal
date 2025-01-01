interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="pl-0 md:pl-64"> {/* Responsive padding for sidebar */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};