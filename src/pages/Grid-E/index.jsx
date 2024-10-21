import Grid from './Grid';

function GridE() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 border-b bordao text-white pb-[13dvh]">
      <nav className="flex items-center justify-center w-full h-[10dvh] border-y bordao ">
        <ul className="flex items-center justify-center gap-8">
          <li className="linkes text-xl cursor-pointer linkes-ativo">Grid-E</li>
          <li className="linkes text-xl cursor-pointer">Minha equipe</li>
          <li className="linkes text-xl cursor-pointer">Minhas ligas</li>
          <li className="linkes text-xl cursor-pointer">Pontos ao vivo</li>
        </ul>
      </nav>
      <Grid />
    </div>
  );
}

export default GridE;
