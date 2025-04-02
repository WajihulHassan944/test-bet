import DeleteFights from '@/Components/Admin/DeleteFights'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <DeleteFights />
     </AdminPrivateRoute>
  )
}

export default index
