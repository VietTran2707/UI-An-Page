import React from 'react'
import type { ReactElement } from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const Settings = () => {
    return (
        <div></div>
    )
}

Settings.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}

export default Settings