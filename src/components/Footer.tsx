import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaLinkedin  } from "react-icons/fa";



interface ILink {
    label: string;
    path: string;
}

const Footer = ({links}: { links: ILink[] }) => {
    return (
        <footer className={`w-full border-y py-7 lg:py-10 xl:py-12`}>
            <div className="wrapper">
                <div
                    className={`w-full flex flex-col lg:flex-row justify-between items-center lg:border-b pb-3.5 lg:pb-10 xl:pb-12`}>
                    <div className="w-full lg:w-fit pb-7 lg:p-0 border-b lg:border-0 flex justify-center items-center">
                        <Image src={`/Logo/logo-extended-desktop.webp`} alt={`logo`} width={0} height={0}
                               objectFit={"cover"} unoptimized
                               className={`h-12 w-auto lg:h-10 xl:h-14`}/>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList
                            className={`w-full flex flex-wrap justify-center gap-5 px-5 py-7 text-base font-medium`}>
                            {links.map((link: ILink, i) => (
                                <NavigationMenuItem key={i}
                                                    className={`rounded-sm hover:bg-secondary`}>
                                    <NavigationMenuLink href={link.path}>{link.label}</NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className='w-full lg:w-fit border rounded-lg flex flex-col lg:flex-row items-center justify-center gap-3.5 p-4 '>
                        <h4 className='text-base'>Stay Connected</h4>
                        <div className="socials flex items-center justify-center gap-2.5">
                            <Link
                                href="/"
                                className={`rounded-md !bg-[linear-gradient(var(--linear-grey-14))] flex justify-center items-center p-3.5 text-5 text-start font-semibold`}>
                                <FaFacebook size={24} color="hsl(var(--green-50))" />
                            </Link>
                            <Link
                                href="/"
                                className={`rounded-md !bg-[linear-gradient(var(--linear-grey-14))] flex justify-center items-center p-3.5 text-5 text-start font-semibold`}>
                                    <FaTwitter size={24} color="hsl(var(--green-50))" />
                            </Link>
                            <Link
                                href="/"
                                className={`rounded-md !bg-[linear-gradient(var(--linear-grey-14))] flex justify-center items-center p-3.5 text-5 text-start font-semibold`}>
                                    <FaLinkedin size={24} color="hsl(var(--green-50))" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-full flex flex-col gap-5 lg:flex-row justify-between items-center pt-3.5 lg:pt-10 xl:pt-12`}>
                        <ul className='w-full lg:w-fit flex flex-col lg:flex-row lg:gap-5 text-lg [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li]:gap-2 [&>li]:py-5 [&>li]:border-b [&>li]:w-full [&>li]:lg:w-fit'>
                            <li><TbMailFilled size={24} color='hsl(var(--green-50))' /> avabdurahmon@gmail.com</li>
                            <li><FaPhone size={24} color='hsl(var(--green-50))' /> +998910046199</li>
                            <li><TiLocation size={24} color='hsl(var(--green-50))' /> Uzbekistan, Tashkent</li>
                        </ul>
                        <p className='text-dimmed-foreground'>© 2023 SquareUp. All rights reserved.</p>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;