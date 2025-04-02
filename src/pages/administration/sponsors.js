import AdminSponsor from '@/Components/Admin/AdminSponsor'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <AdminSponsor />
     </AdminPrivateRoute>
  )
}

export default index
