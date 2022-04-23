import React, { useEffect, useState, useRef } from 'react'
import styles from './dashboardlayout.module.scss'
import logo from '../../assets/image/dashboard/logo.png'
import dashboardIcon from '../../assets/image/dashboard/icon.png'
import frameIcon from '../../assets/image/dashboard/frame.png'
import Link from 'next/link'

interface menu {
    icon?: string
    name: string
    link: string
}

const menuList: menu[] = [
    {
        icon: dashboardIcon.src,
        name: 'Dashboard',
        link: '/dashboard',
    },
    {
        icon: '',
        name: 'Blogs Post',
        link: '/dashboard/blogsPost',
    },
    {
        icon: '',
        name: 'Collaborators',
        link: '/dashboard/collaborators',
    },
    {
        icon: '',
        name: 'Settings',
        link: '/dashboard/settings',
    },
    {
        icon: '',
        name: 'Log out',
        link: '/login',
    }
]


const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        const curPath = window.location.pathname   
        const activeIndex = menuList.findIndex((menuItem:menu) => menuItem.link === curPath)
        setActiveIndex(curPath.length === 0 ? 0: activeIndex)
    })

    return (
        <div className={styles.dashboardSidebar}>
            <div className={styles.logo}>
                <img src={logo.src} alt="logo" />
            </div>
            <div className={styles.menu}>
                {menuList.map((menuItem: menu, index: number) => {
                    return (
                        <Link key={index} href={menuItem.link}>
                            <div className={`${styles.sidebarItem} ${activeIndex === index ? styles.active : ''}`}>
                                {   
                                    menuItem.icon != '' ? <img src={menuItem.icon} alt='icon'/> : ''
                                }
                                <span>{menuItem.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className={styles.draft}>
                <img src={frameIcon.src} alt='draftIcon'/>
                <Link href='/dashboard/post'>
                    <button>Create file</button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar