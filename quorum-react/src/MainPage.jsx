import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // 3. MODIFICA LA LÓGICA DE BÚSQUEDA
  const handleBuscar = () => {
    // Normalizamos el input: minúsculas y sin espacios extra
    const valor = searchTerm.toLowerCase().trim();

    if (valor === "ciencia curiosa" || valor === "curiosidades") {
      navigate('/curiosidades');

    } else if (valor === "astronomia" || valor === "fisica") {
      alert("Esa sección aún no ha sido migrada.");

    } else {
      alert("No se encontró la página para:" + valor);
    }

    // Opcional: Limpia la barra de búsqueda después de buscar
    setSearchTerm('');
  };

  return (
    <>

      {/* Enlace para volver al inicio (App.jsx) */}
      {/* Reemplaza el <Link> del ícono por este: */}
      <Link to="/" className="mi-boton-volver">
        Volver
      </Link>

      <div>
        <h2 className="buscador">Busca tema de tu interés</h2>

        {/* PASO 5: Conectamos el input al 'estado' de React
          value={searchTerm} -> Muestra el valor del estado.
          onChange={...} -> Actualiza el estado cada vez que escribes.
        */}
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

        {/* PASO 6: Conectamos el botón a la función de React
          onclick="buscar()" -> onClick={handleBuscar}
        */}
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
