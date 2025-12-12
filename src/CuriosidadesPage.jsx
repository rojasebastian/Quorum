import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function CuriosidadesPage() {
  const [listaCuriosidades, setListaCuriosidades] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tokenGuardado = localStorage.getItem('token');

    if (!tokenGuardado) {
      setError("No estás logueado. Por favor inicia sesión.");
      return;
    }

    fetch('http://localhost:8080/api/curiosidades', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenGuardado}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al conectar o permiso denegado');
        }
        return response.json();
      })
      .then(data => {
        setListaCuriosidades(data);
      })
      .catch(err => {
        console.error(err);
        setError("Error cargando datos. Revisa si tu sesión expiró.");
      });
  }, []);

  return (
    <>
      {/* Título en NEGRO (con fondo blanco para que se lea sobre las partículas) */}
      <div className="text-center mt-5 mb-4">
        <div style={{ display: 'inline-block', backgroundColor: 'white', padding: '10px 30px', borderRadius: '50px' }}>
          <h2 style={{ color: 'black', margin: 0, fontWeight: 'bold' }}>
            Curiosidades desde el Backend
          </h2>
        </div>
      </div>

      {error && (
        <div className="container">
          <div className="alert alert-danger">{error}</div>
        </div>
      )}

      {/* --- CURIOSIDADES DEL BACKEND (Con el diseño corregido) --- */}
      {listaCuriosidades.map((item) => (
        <div key={item.id} className="curiosidades">
          <h1 className="curiosidades-titulo">{item.titulo}</h1>

          <div className="contenido">
            <div className="texto-descripcion">
              <p>{item.descripcion}</p>
            </div>
            <img
              src={item.imagenUrl}
              alt={item.titulo}
              className="imagen-curiosidad"
            />
          </div>
        </div>
      ))}

      {/* --- CURIOSIDADES ESTÁTICAS (Originales) --- */}
      <div className="curiosidades">
        <div>
          <h1 className="curiosidades-titulo">Ophiocordyceps unilateralis</h1>
          <div className="contenido">
            <p>
              Existe un hongo llamado <strong>Ophiocordyceps unilateralis</strong> que controla la mente de las hormigas.
              El hongo infecta a la hormiga, la obliga a trepar a un lugar alto y luego la mata para crecer desde su cuerpo
              y esparcir sus esporas.
            </p>
            <img src="/curiosidad-hormiga.png" alt="Hongo Ophiocordyceps" className="imagen-curiosidad" />
          </div>
        </div>
      </div>

      <div className="curiosidades">
        <h1 className="curiosidades-titulo">Momias chinchorro</h1>
        <div>
          <div className="contenido">
            <p>
              Las <strong>momias Chinchorro</strong>, de la costa norte de Chile
              son las momias más antiguas del mundo conocidas hasta ahora,
              ¡mucho más antiguas que las egipcias!
            </p>
            <img src="/momias-chinchorro.png" alt="Momias" className="imagen-curiosidad" />
          </div>
        </div>
      </div>

      <div className="curiosidades">
        <h1 className="curiosidades-titulo">Espectros de luz</h1>
        <div>
          <div className="contenido">
            <p>
              En 1861, <strong>Bunsen y Kirchhoff </strong> desarrollaron el análisis espectral, que permite identificar elementos químicos por la luz que emiten.
              Gracias a esto, se pudieron <strong>descubrir elementos en las estrellas </strong> sin traerlas a la Tierra.
            </p>
            <img src="/prisma.png" alt="Prisma" className="imagen-curiosidad" />
          </div>
        </div>
      </div>

      <div className="curiosidades">
        <h1 className="curiosidades-titulo">Dilatación temporal</h1>
        <div>
          <div className="contenido">
            <p>
              Según Einstein, el tiempo pasa más lento cerca de objetos masivos o a velocidades cercanas a la luz.
              Por ejemplo, un astronauta en el espacio envejece un poco más lento que alguien en la Tierra.
              Este fenómeno, llamado dilatación temporal, es clave en tecnologías como el GPS.
            </p>
            <img src="/dilatacion-temporal.png" alt="dilatacion-temporal" className="imagen-curiosidad" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CuriosidadesPage;
