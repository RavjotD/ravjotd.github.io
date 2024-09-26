"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from 'react'

const NavLink = ({link}) => {
  
  const pathName = usePathname();

    console.log(pathName);
  
  
    return (
    
        <Link className={`rounded p-1 ${pathName === link.url && " hover:underline underline underline-offset-4 decoration-cyan-600"}`} href={link.url}>
            {link.title}
        </Link>

  )
}

export default NavLink
