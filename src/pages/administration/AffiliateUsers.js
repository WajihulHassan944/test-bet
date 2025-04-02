import AffiliateUsers from '@/Components/Admin/AffiliateUsers'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <AffiliateUsers />
     </AdminPrivateRoute>
  )
}

export default index
