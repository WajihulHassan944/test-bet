import SuspendedAccounts from '@/Components/Admin/SuspendedAccounts'
import AdminPrivateRoute from '@/Components/PrivateRoute/PrivateRouteAdmin'
import React from 'react'

const index = () => {
  return (
     <AdminPrivateRoute>
        <SuspendedAccounts />
     </AdminPrivateRoute>
  )
}

export default index
