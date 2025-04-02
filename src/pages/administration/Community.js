import AdminForumList from '@/Components/Admin/AdminForumList'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <AdminForumList />
     </AdminPrivateRoute>
  )
}

export default index
