import React, { Suspense } from 'react'

// Principal route imporatation
import __MAIN__ from '@config/routes/main'
import __DASHBOARD__ from '@config/routes/dashboard'

// Redirect route importation
import __LOADER__ from '@pages/redirect/loader/loader'
import __REDIRECT__ from '@config/routes/redirect'

function RouteConfig() {
  return (
    <Suspense fallback={<__LOADER__ />}>
        <__MAIN__ />
        <__DASHBOARD__ />
        <__REDIRECT__ />
    </Suspense>
  )
}

export default RouteConfig
