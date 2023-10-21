import React from 'react'
import navBarStyles from "@/Components/NavBar/Navbar.module.css"
import Link from 'next/link'
import Button from '../Button/button'

type Props = {}

const NavBar = (props: Props) => {
    const pages = ['Solutions', 'Resource Hub', 'Contact']
    const buttons = ['Transport Login', 'Fullfilment Login']
    const buttonColors = ['#ee7d00', '#17224d']
  return (

    
    <nav className={navBarStyles.navbar}>
        <div >
            <Link href='/' className={navBarStyles.logo}>
                Deliveroo
            </Link>

        </div>
        <div className={navBarStyles.fullmenu}>
        <ul className={navBarStyles.menu}>
        {pages.map((page, index) => (
            <li key={index}>
                {page}
            </li>
        ))}
        </ul>
        {buttons.map((button, index) => (
            <Button label={button} buttonColor={buttonColors[index]}>
            </Button>
        ))}
        </div>
    </nav>
  )
}

export default NavBar