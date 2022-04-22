import React from 'react'
import styles from './dashboardlayout.module.scss'
import Sidebar from './Sidebar'


const DashboardLayout:React.FC = () => {

    return (
        <div className={styles.dashboard}>
            <Sidebar />
            
        </div>
    )
}

export default DashboardLayout