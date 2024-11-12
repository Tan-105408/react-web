import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import AppRoutes from './router/AppRoutes'; // Comment initially

function App() {
  return (
    <div>
      <Header />
      <h1>Main Content Area</h1>
      {/* Uncomment to test AppRoutes next */}
      {/* <AppRoutes /> */}
      <Footer />
    </div>
  );
}

export default App;
