"use";
import AuthProvider from "@/components/AuthProvider";
import SellerNavbar from "@/components/layout/seller/Navbar";
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@/lib/session";
import { Box } from "@mui/material";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <SellerNavbar />

          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Box>
      </QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
