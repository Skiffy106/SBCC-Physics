import Link from "next/link"
import AnimatedLink from "./AnimatedLink"

interface NavbarDropdownProps {
    title: string
    href: string
    className: string
    subNavigation: Array<{ title: string, href: string }>
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ title, href, className, subNavigation }) => {
    return (
        <div className="group relative flex flex-row items-center">
            <Link
                className={className + " p-2"}
                href={href}
            >
                {title}
            </Link>
            <div aria-label={`Container for list of ${title}`} className="block absolute top-[100%] z-10 transition-transform origin-top scale-y-0 ease-out group-hover:scale-100">
                <div className="h-4" aria-hidden="true"></div>
                <ul className="flex flex-col text-left border border-black p-2 left-0 text-black text-lg text-nowrap bg-gray-100" aria-label={`list of ${title}`}>
                    {subNavigation.map((subNavigationItem, index) => (
                        <li
                            key={index}
                            className="p-2"
                        >
                            {/* TODO: Fix bug - make hover only expand to width of text instead of full length*/}
                            <AnimatedLink
                                href={subNavigationItem.href}
                                className="inline-block hover:text-sbcc-red"
                                textColor="text-black"
                                underlineColor="before:bg-sbcc-red"
                            >
                                {subNavigationItem.title}
                            </AnimatedLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavbarDropdown;