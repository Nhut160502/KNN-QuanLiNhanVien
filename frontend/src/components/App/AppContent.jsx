import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../../routes'
import Page404 from 'src/pages/Page404'

const AppContent = () => {
  return (
    <CContainer lg style={{ maxWidth: '80%', marginBottom: '50px' }}>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route key={idx} path={route.path} name={route.name} element={<route.element />} />
              )
            )
          })}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
