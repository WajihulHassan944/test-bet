import AffiliatesPayouts from '@/Components/Admin/AffiliatesPayouts'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
   <AdminPrivateRoute>
    <AffiliatesPayouts />
   </AdminPrivateRoute>
  )
}

export default index
