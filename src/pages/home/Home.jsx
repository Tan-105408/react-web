import React from 'react';
import AppRoutes from '../../router/AppRoutes';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default Layout;