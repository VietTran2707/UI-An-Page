import React from 'react'
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
        link: '/dashboard'
    },
    {
        icon: '',
        name: 'Blogs Post',
        link: 'dashboard/blogsPost'
    },
    {
        icon: '',
        name: 'Collaborators',
        link: 'dashboard/collaborators'
    }
]

const menu2: menu[] = [
    {
        name: 'Settings',
        link: 'dasboard/setting'
    },
    {
        name: 'Log out',
        link: '/login'
    }
]


const Sidebar = () => {
  return (
    <div className={styles.dashboardSidebar}>
        <div className={styles.logo}>
            <img src={logo.src} alt="logo" />
        </div>
        <div>
            {menuList.map((menuItem: menu, index: number) => {
                return (
                    <Link key={index} href={menuItem.link}>
                        <div className={styles.SidebarItem}>
                            {   
                                menuItem.icon != '' ? <img src={menuItem.icon} alt='icon'/> : ''
                            }
                            <span>{menuItem.name}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className={styles.line}></div>
        <div>
            {menu2.map((menuItem: menu, index: number) => {
                return (
                    <Link key={index} href={menuItem.link}>
                        <div className={styles.menuItem}>{menuItem.name}</div>
                    </Link>
                )
            })}
        </div>
        <div className={styles.draft}>
            <img src={frameIcon.src} alt='draftIcon'/>
            <div>New Draft</div>
            <p>Do you want to make a new draft
            to write something</p>
            <Link href='/dashboard/post'>
                <button>Create file</button>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar