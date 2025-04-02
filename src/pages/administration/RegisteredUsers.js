import RegisteredUsers from '@/Components/Admin/RegisteredUsers'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <RegisteredUsers />
     </AdminPrivateRoute>
  )
}

export default index
