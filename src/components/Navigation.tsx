"use client";
import Image from 'next/image';
import AnimatedLink from './AnimatedLink';
import { useState } from 'react';

interface NavigationItem {
    name: string;
    href: string;
    subnavigation?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    { name: "Home", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Faculty", href: "#" },
]

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="flex flex-row justify-between items-center relative py-4 px-8 lg:px-16 xl:px-32 2xl:48 border-b border-slate-50">
            <div className="absolute top-0 left-0 w-full h-full bg-sbcc-red -z-10" aria-hidden="true"></div>
            <a href="#" className="flex flex-row items-center space-x-4 z-20">
                <div className="max-h-[3rem] max-w-[3rem] sm:max-h-[3.75rem] sm:max-w-[3.75rem] lg:max-h-[5rem] lg:max-w-[5rem]">
                    <Image width={80} height={80} priority={true} alt="SBCC Logo" src="/logos/sbcc-white.svg" />
                </div>
                <div className="h-[4rem] sm:h-[5rem] lg:h-[6.25rem] w-[1px] bg-slate-50" aria-hidden="true"></div>
                <div className="flex flex-col text-slate-50">
                    <span className="text-sm lg:text-lg xl:text-xl font-bold">Santa Barbara City College</span>
                    <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mt-2">Physics & Engineering</span>
                </div>
            </a>
            <div className="block md:hidden" aria-label="Mobile Navigation">
                <button
                    className="flex h-12 w-12 flex-col justify-between items-center z-20 p-2 m-0"
                    onClick={handleClick}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <div className={`rounded-sm bg-slate-50 w-full h-[0.25rem] block transition-all duration-300 ease-in-out ${!isOpen ? "rotate-45 origin-center translate-y-[13.6px]" : ""}`}></div>
                    <div className={`rounded-sm bg-slate-50 w-full h-[0.25rem] block transition-all duration-300 ease-in-out ${!isOpen ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}></div>
                    <div className={`rounded-sm bg-slate-50 w-full h-[0.25rem] block transition-all duration-300 ease-in-out ${!isOpen ? "-rotate-45 origin-center -translate-y-[13.6px]" : ""}`}></div>
                </button>
                <div className={`absolute left-0 w-full flex flex-col h-60 items-center justify-center bg-slate-800 -z-20 transition-all duration-700 ease-out ${isOpen ? " top-[-15rem]" : "top-full"}`}>
                    <ul className="flex flex-col space-y-4 text-lg font-medium items-center p-4">
                        {navigation.map((item, index) => (
                            <li key={index} className="">
                                <AnimatedLink href={item.href} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={"pb-1 before:rounded-sm"}>
                                    {item.name}
                                </AnimatedLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hidden md:block" aria-label="Primary Navigation">
                <ul className="flex flex-row space-x-4 text-base lg:text-lg xl:text:xl font-medium items-center">
                    {/* TODO: Handle subnavigation */}
                    {navigation.map((item, index) => (
                        <li key={index}>
                            <AnimatedLink href={item.href} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={"pb-1 before:rounded-sm"}>
                                {item.name}
                            </AnimatedLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}

export default Navigation;