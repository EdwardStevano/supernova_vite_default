import React, { Suspense } from 'react'

// Principal route imporatation
import __MAIN__ from '@config/routes/main'
import __DASHBOARD__ from '@config/routes/dashboard'

// Redirect route importation
import __LOADER__ from '@pages/loader/loader'
import __NOTFOUND__ from '@config/routes/notFound'

function RouteConfig() {
  return (
    <Suspense fallback={<__LOADER__ />}>
        <__MAIN__ />
        {/* <__DASHBOARD__ /> */}
        <__NOTFOUND__ />

    </Suspense>
  )
}

export default RouteConfig
