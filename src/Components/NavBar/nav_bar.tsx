import React from 'react'
import navBarStyles from "@/Components/NavBar/Navbar.module.css"
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
    const pages = ['Solutions', 'Resource Hub', 'Contact']
  return (

    
    <nav className={navBarStyles.navbar}>
        <div >
            <Link href='/' className={navBarStyles.logo}>
                Deliveroo
            </Link>

        </div>
        <ul className={navBarStyles.menu}>
        {pages.map((page, index) => (
            <li key={index}>
                {page}
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default NavBar