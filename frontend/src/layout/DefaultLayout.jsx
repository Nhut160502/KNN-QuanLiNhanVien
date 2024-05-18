import React from 'react'
import AppContent from 'src/components/App/AppContent'
import AppHeader from 'src/components/App/AppHeader'
import AppLoading from 'src/components/App/AppLoading'
import AppSidebar from 'src/components/App/AppSidebar'
const DefaultLayout = () => {
  return (
    <>
      <AppLoading />
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <AppContent />
      </div>
    </>
  )
}

export default DefaultLayout
