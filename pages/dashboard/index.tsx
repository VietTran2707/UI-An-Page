import React from 'react'
import type { ReactElement } from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const Dashboard = () => {
  return (
    <div></div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
      <DashboardLayout>{page}</DashboardLayout>
  )
}
export default Dashboard