import PreviousMatches from '@/Components/Admin/PreviousMatches'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <PreviousMatches />
    </AdminPrivateRoute>
  )
}

export default index
