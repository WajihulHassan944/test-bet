import AdminNews from '@/Components/Admin/AdminNews'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <AdminNews />
     </AdminPrivateRoute>
  )
}

export default index
