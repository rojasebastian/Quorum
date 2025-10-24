import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Esta es tu función original de JavaScript
    const handleMouseMove = (e) => {
      // Verificamos si la referencia al video ya existe
      if (videoRef.current) {
        let x = (e.clientX / window.innerWidth - 0.5) * 80;
        let y = (e.clientY / window.innerHeight - 0.5) * 80;
        // En lugar de 'video.style.transform', usamos 'videoRef.current.style.transform'
        videoRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.05)`;
      }
    };
    // Añadimos el 'listener'
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        id="bg-video-p"
      >
        <source src="/fondo-particulas.mp4" type="video/mp4" />
      </video>

      <div className="content-p">
        <h1 draggable="true">
          <Link to="/main">Quorum</Link>
        </h1>
      </div>
    </>
  )
}

export default App
