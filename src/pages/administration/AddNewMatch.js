import AddNewMatch from '@/Components/Admin/AddNewMatch'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <AddNewMatch />
    </AdminPrivateRoute>
  )
}

export default index
