import React, { Children } from 'react'
import styles from './dashboardlayout.module.scss'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface Props  { 
    children: React.ReactNode
 }

const DashboardLayout = (props: Props) => {

    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <div className={styles.dashboardRight}>
                <Navbar />
                {props.children}
            </div>
        </div>
    )
}

export default DashboardLayout