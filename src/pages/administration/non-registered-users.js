import NonRegisteredUsers from '@/Components/Admin/NonRegisteredUsers'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <NonRegisteredUsers />
    </AdminPrivateRoute>
  )
}

export default index
