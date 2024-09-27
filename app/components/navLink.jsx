"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from 'react'

const NavLink = ({link}) => {
  
  const pathName = usePathname();

    console.log(pathName);
  
  
    return (
    
        <Link className={`hover:underline decoration-cyan-700 underline-offset-8 rounded p-1 ${pathName === link.url && " bg-cyan-600"}`} href={link.url}>
            {link.title}
        </Link>

  )
}

export default NavLink
