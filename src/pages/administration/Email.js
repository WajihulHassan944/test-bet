import EmailTemplate from '@/Components/Admin/EmailTemplate'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
    <AdminPrivateRoute>
        <EmailTemplate />
    </AdminPrivateRoute>
  )
}

export default index
