import { useEffect, useRef } from 'react';
import Grid from './Grid';
import Equipe from './Equipe';
import { useState } from 'react';

function GridE() {
  const gridRef = useRef(null);
  const equipeRef = useRef(null);
  const ligasRef = useRef(null);
  const pontosRef = useRef(null);

  const [ativo, setAtivo] = useState(0);

  const telas = [<Grid key={0} />, <Equipe key={1} />];

  useEffect(() => {
    const refs = [gridRef, equipeRef, ligasRef, pontosRef];
    refs.forEach((ref, index) => {
      if (ref.current) {
        if (index === ativo) {
          ref.current.classList.add('linkes-ativo');
        } else {
          ref.current.classList.remove('linkes-ativo');
        }
      }
    });
  }, [ativo]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 border-b bordao dark:text-white text-[#000000ba4] pb-[13dvh]">
      <nav className="flex items-center justify-center w-full h-[10dvh] border-y bordao ">
        <ul className="flex items-center justify-center gap-8">
          <li
            className="linkes text-xl cursor-pointer linkes-ativo"
            ref={gridRef}
            onClick={() => setAtivo(0)}
          >
            Grid-E
          </li>
          <li
            className="linkes text-xl cursor-pointer"
            ref={equipeRef}
            onClick={() => setAtivo(1)}
          >
            Minha equipe
          </li>
          <li
            className="linkes text-xl cursor-pointer"
            ref={ligasRef}
            onClick={() => setAtivo(2)}
          >
            Minhas ligas
          </li>
          <li
            className="linkes text-xl cursor-pointer"
            ref={pontosRef}
            onClick={() => setAtivo(3)}
          >
            Pontos ao vivo
          </li>
        </ul>
      </nav>
      {telas[ativo]}
    </div>
  );
}

export default GridE;
