"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"


const Navlink = ({children, href, className}) => {
    const path = usePathname();
    console.log(path);
    console.log(href);

    return (
        <Link 
            className={`${className} ${path === href ? "text-[#00000099]" : "text-[#000000]"} `}
            href={href}>
                {children}
        </Link>
    )
}

export default Navlink