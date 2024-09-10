import React from 'react';
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";


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
                    <div className="w-full pb-7 lg:p-0 border-b flex justify-center items-center">
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
                </div>
                <div
                    className={`w-full flex felx-col lg:flex-row justify-between items-center pt-3.5 lg:pt-10 xl:pt-12`}></div>
            </div>
        </footer>
    );
};

export default Footer;