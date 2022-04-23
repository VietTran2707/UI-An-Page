import React from 'react'
import type { ReactElement } from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'

const BlogsPost = () => {
    return (
        <div>
        </div>
    )
}

BlogsPost.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}

export default BlogsPost