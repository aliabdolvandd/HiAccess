import AuthProvider from "@/components/AuthProvider";
import DashboardContent from "@/components/seller/sellerLayout/seller-dashboard-context";
import { DrawerProvider } from "@/components/seller/sellerLayout/seller-drawer-provider";
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@/lib/session";
import { Box } from "@mui/material";

async function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();

  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
        <DrawerProvider>
          <Box component="main">
            <DashboardContent>{children}</DashboardContent>
          </Box>
        </DrawerProvider>
      </QueryProvider>
    </AuthProvider>
  );
}

export default SellerLayout;
