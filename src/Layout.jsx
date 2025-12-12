import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Importamos nuestro Header
import Footer from './Footer'; // Importamos nuestro Footer
import './index.css';

function Layout() {
  return (
    <>
      <Header />

      {/* El video de fondo también es compartido,
          así que lo ponemos en el Layout */}
      <video autoPlay muted loop id="bg-video-m">
        <source src="/fondo-particulas.mp4" type="video/mp4" />
      </video>

      {/* <Outlet> es el marcador de posición.
          Aquí es donde React Router renderizará
          MainPage.jsx o CuriosidadesPage.jsx */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
