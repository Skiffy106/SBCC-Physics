import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";
// import NavbarDropdown from "./NavbarDropdown";

const Header: React.FC = () => {
    return (
        <header>
            <div>
                <a href="#" className="bg-slate-800 h-8 text-sm items-center justify-center font-medium text-slate-50 flex flex-row space-x-2">
                    <Image width={20} height={20} alt="SBCC Logo" src="/sbcc-white.svg" />
                    <span>Department of Physics and Engineering</span>
                </a>
            </div>
            <nav className="bg-sbcc-red flex flex-row justify-between items-center border border-slate-50 py-4 px-64 md:px-32 sm:px-16">
                <div className="flex flex-row items-center space-x-4">
                    <a href="#">
                        <Image width={80} height={80} alt="SBCC Logo" src="/sbcc-logo-white.png" />
                    </a>
                    <div className="h-[100px] w-[1px] bg-slate-950" aria-hidden="true"></div>
                    <div className="flex flex-col text-slate-50">
                        <span className="text-xl font-bold">Santa Barbara City College</span>
                        <span className="text-3xl font-bold mt-2">Physics & Engineering</span>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-row space-x-4 text-xl font-medium items-center">
                        <AnimatedLink href={"#"} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={""}>
                            Home
                        </AnimatedLink>
                        <AnimatedLink href={"#"} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={""}>
                            Faculty
                        </AnimatedLink>
                        <AnimatedLink href={"#"} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={""}>
                            Courses
                        </AnimatedLink>
                        {/* <NavbarDropdown
                            title={"Courses"}
                            href={"#"}
                            className={""}
                            subNavigation={[
                                { title: "PHYS 101", href: "#" },
                                { title: "ENGR 107", href: "#" },
                                { title: "TACO 120", href: "#" },
                                { title: "GEO 113", href: "#" },
                                { title: "CEO 210", href: "#" },
                            ]}
                        /> */}
                        <AnimatedLink href={"#"} textColor={"text-slate-50"} underlineColor={"before:bg-slate-50"} className={""}>
                            Resources
                        </AnimatedLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;