import AdminPredictions from '@/Components/Admin/AdminPredictions'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <AdminPredictions />
    </AdminPrivateRoute>
  )
}

export default index
