import YoutubeArchive from '@/Components/Admin/YoutubeArchive'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <YoutubeArchive />
     </AdminPrivateRoute>
  )
}

export default index
