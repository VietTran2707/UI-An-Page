import React from 'react'
import type { ReactElement } from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const Collaborators = () => {
    return (
        <div></div>
    )
}

Collaborators.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}
export default Collaborators