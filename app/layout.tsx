import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MinimalNavbar from "@/components/ui/minimal-navbar";
import { ThemeProvider } from "@/components/theme/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spark Stats",
    description: "The Ultimate Spotify Companion",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    <MinimalNavbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
