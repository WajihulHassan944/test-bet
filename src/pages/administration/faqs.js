import AdminFaqs from '@/Components/Admin/AdminFaqs'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <AdminFaqs />
     </AdminPrivateRoute>
  )
}

export default index
