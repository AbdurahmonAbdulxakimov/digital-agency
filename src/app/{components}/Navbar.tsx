"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Button from "@/app/{components}/Button";
import { LuAlignRight, LuX } from "react-icons/lu";


interface ILink {
    label: string;
    path: string;
}

interface INavbarProps {
    logo: React.ReactNode,
    links: ILink[],
}

const Navbar = ({logo, links}: INavbarProps) => {
    const [ showNav, setShowNav ] = useState(false);
    const router = useRouter();

    const clickHandler = () => {
        router.push("/contacts")
    }

    return (<NavigationMenu className="w-full max-w-7xl mx-auto py-5 px-4 flex justify-between z-50 relative">
        <div className={`h-10 object-cover z-50`}>
            {logo}
        </div>

        <div className={`absolute block lg:hidden top-5 right-4 z-50 cursor-pointer`} onClick={() => {setShowNav(!showNav)}}>
            {showNav? <LuX color="hsl(var(--green))" size={32} /> : <LuAlignRight color="hsl(var(--green))" size={32} />}
        </div>

        <div className={`${showNav? "flex absolute top-0 right-0 w-full h-[100dvh] bg-primary text-xl" : "hidden"} lg:text-base lg:relative lg:flex flex-col justify-evenly lg:flex-row lg:items-center lg:justify-between lg:w-[75%] lg:h-10`}>
            <NavigationMenuList className={`${showNav? "" : ""} gap-1 flex-col justify-center items-evenly lg:flex-row lg:items-center lg:justify-between h-full`}>
                {links.map((link: ILink, i) => (
                    <NavigationMenuItem key={i} className={`${showNav? "w-full text-center" : ""} py-6 lg:py-3 px-4 rounded-sm hover:bg-secondary`}>
                            <NavigationMenuLink href={link.path} >{ link.label }</NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            <Button label="Contact Us" clickHandler={clickHandler}/>
        </div>
    </NavigationMenu>)
}

export default Navbar;
