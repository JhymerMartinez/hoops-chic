import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import { ThemeRegistry } from "@/components/ThemeRegistry/ThemeRegistry";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Hoops Chic",
  description: "Bisutería artesanal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppRouterCacheProvider>
            <Header />
            <Container maxWidth="xl">{children}</Container>
            <Footer />
          </AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
