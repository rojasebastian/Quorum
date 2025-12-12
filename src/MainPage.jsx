import React, { useState, useRef } from 'react'; // <--- ¡AQUÍ ESTABA EL ERROR!
import { Link, useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const videoRef = useRef(null); // Ahora sí funcionará porque lo importamos arriba

  // 3. LÓGICA DE BÚSQUEDA
  const handleBuscar = () => {
    // Normalizamos el input: minúsculas y sin espacios extra
    const valor = searchTerm.toLowerCase().trim();

    if (valor === "ciencia curiosa" || valor === "curiosidades") {
      navigate('/curiosidades');

    } else if (valor === "astronomia" || valor === "fisica") {
      alert("Esa sección aún no ha sido migrada.");

    } else {
      alert("No se encontró la página para: " + valor);
    }

    // Limpia la barra de búsqueda después de buscar
    setSearchTerm('');
  };

  return (
    <>
      {/* --- Video de fondo --- */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        id="bg-video-main"
      >
        <source src="/blanco-fondo.mp4" type="video/mp4" />
      </video>

      {/* --- CONTENIDO --- */}

      {/* Enlace para volver al inicio */}
      <Link to="/" className="mi-boton-volver">
        Volver
      </Link>

      <div>
        <h2 className="buscador">Busca tema de tu interés</h2>

        {/* Input conectado al estado */}
        <input
          type="text"
          className="buscador-input"
          id="busqueda"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleBuscar();
            }
          }}
        />

        {/* Botón de búsqueda */}
        <button
          type="button"
          onClick={handleBuscar}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.7em' }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>

    </>
  );
}

export default Main;
