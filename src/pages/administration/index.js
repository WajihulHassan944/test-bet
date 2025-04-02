import Admin from '@/Components/Admin/Admin'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <Admin />
    </AdminPrivateRoute>
  )
}

export default index
