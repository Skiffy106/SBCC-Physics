import Link from "next/link"
import clsx from "clsx"

interface AnimatedLinkProps {
    href: string
    className: string
    children: string | React.ReactElement
    textColor: string
    underlineColor: string | undefined
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, className, children, textColor, underlineColor }) => {

    if (textColor.startsWith("text-") === false) {
        throw new Error("textColor prop must start with 'text-'")
    }

    if (underlineColor && underlineColor.startsWith("before:bg-") === false) {
        throw new Error("underlineColor prop must start with 'before:bg-")
    }

    const linkClass = clsx(
        className,
        `relative ${textColor}`,
        underlineColor && `before:transition-all before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 ${underlineColor} hover:before:w-full`
    );

    return (
        <Link href={href} className={linkClass}>
            {children}
        </Link>
    );
}

export default AnimatedLink