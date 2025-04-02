import AdminRecords from '@/Components/Admin/AdminRecords'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
   <AdminPrivateRoute>
    <AdminRecords />
   </AdminPrivateRoute>
  )
}

export default index
