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
        href: `/home/user/${userId}`
    },
    {
        name: "Logout",
        icon: <RiLogoutCircleLine />,
        href: `/`
    },
    {
        name: "Home",
        icon: <IoMdHome />,
        href: `/home`
    },
    {
        name: "About us",
        icon: <BsExclamationCircle />,
        href: `/home/AboutUs`
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
        <div>
            <Button
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
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}

                {menuItems.map(({ name, icon, href }) => (
                    <MenuItem onClick={handleClose}>
                        <Link href={href}> {icon} {name} </Link>
                    </MenuItem>



                ))}

                {/* <ul>
                    {menuItems.map(({ name, icon, href }) => (
                        <li>
                            <Link href={href}> {icon} {name} </Link>
                        </li>
                    ))}
                </ul> */}
            </Menu>
        </div>
    );
}