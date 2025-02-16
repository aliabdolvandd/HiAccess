import AuthProvider from "@/components/AuthProvider";
import DashboardContent from "@/components/layout/seller/seller-dashboard-context";
import { DrawerProvider } from "@/components/layout/seller/seller-drawer-provider";
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@/lib/session";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();

  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
        <DrawerProvider>
          <DashboardContent>{children}</DashboardContent>
        </DrawerProvider>
      </QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
