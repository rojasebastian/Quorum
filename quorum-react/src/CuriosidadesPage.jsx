import React from 'react';
import { Link } from 'react-router-dom';

function CuriosidadesPage() {
  return (
    <>
      <div className="curiosidades">
        <div>
          <h1 className={"curiosidades-titulo"}>Ophiocordyceps unilateralis</h1>
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
        <h1 className={"curiosidades-titulo"}>Momias chinchorro</h1>
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
        <h1 className={"curiosidades-titulo"}>Espectros de luz</h1>
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
        <h1 className={"curiosidades-titulo"}>Dilatación temporal</h1>
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
