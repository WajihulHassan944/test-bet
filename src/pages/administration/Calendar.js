import Calandar from '@/Components/Admin/Calandar'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <Calandar />
     </AdminPrivateRoute>
  )
}

export default index
