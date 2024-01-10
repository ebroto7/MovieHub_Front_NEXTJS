'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import styles from '../../app/home/home.module.css'


type MenuItem = {
    name: string,
    icon: React.ReactNode,
    href: string
}
const userId = 1

const menuItems: MenuItem[] = [
    {
        name: "User",
        icon: <FaUser />,
        href: `/home/user`
    },
    {
        name: "About us",
        icon: <BsExclamationCircle />,
        href: `/home/AboutUs`
    },
    {
        name: "Home",
        icon: <IoMdHome />,
        href: `/home`
    },
    {
        name: "Logout",
        icon: <RiLogoutCircleLine />,
        href: "/api/auth/logout"
    }
]



export default function BurguerMenuLinks() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.burguerMenuContainer}>
            <Button
            className={styles.burguerMenuIcon}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <GiHamburgerMenu />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems.map(({ name, icon, href }, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <Link href={href}> {icon} {name} </Link>
                    </MenuItem>
                ))}
                
            </Menu>
        </div>
    );
}