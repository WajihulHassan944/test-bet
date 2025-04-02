import ShadowFightsLibrary from '@/Components/Admin/ShadowFightsLibrary'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <ShadowFightsLibrary />
     </AdminPrivateRoute>
  )
}

export default index
