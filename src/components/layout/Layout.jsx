import React from 'react'
import AppRoutes from '../../router/AppRoutes'
import Footer from '../footer/Footer'
import Header from '../header/Header'
function Layout() {
  return (
      <div>
        <Header />
        <AppRoutes />
        <Footer />  {/* Add the footer component here */}
      </div>
  )
}

export default Layout