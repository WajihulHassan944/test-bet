import AffiliateMatches from '@/Components/Admin/AffiliateMatches'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <AffiliateMatches />
    </AdminPrivateRoute>
  )
}

export default index
