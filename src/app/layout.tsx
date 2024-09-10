import type {Metadata} from "next";
import {Barlow} from "next/font/google";
import Navbar from "@/app/{components}/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const barlow = Barlow({weight: ["400", "500", "600", "700"], subsets: ["latin"],});

export const metadata: Metadata = {
    title: "Digital Agency",
    description: "Digital Agency for digital solutions to business problems.",
};

const links = [
    {label: "Home", path: "/"},
    {label: "Services", path: "/services"},
    {label: "Work", path: "/work"},
    {label: "Process", path: "/process"},
    {label: "About", path: "/about"},
    {label: "Careers", path: "/careers"},
    {label: "Contact", path: "/contact"},
]

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${barlow.className} text-sm lg:text-base xl:text-lg text-primary-foreground leading-normal`}>
        <Navbar logo={<img src="/Logo-full.svg" alt="Logo" className="h-full"/>} links={links}/>
        {children}
        <Footer links={links}/>
        </body>
        </html>
    );
}
