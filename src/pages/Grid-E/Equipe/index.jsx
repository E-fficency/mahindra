/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import circuito from '../../../assets/circuitogrid.png';
import circuitoLimpo from '../../../assets/circuitogridLimpo.png';
import defaultPiloto from '../../../assets/defaultPiloto.png';
import defaultComissao from '../../../assets/defaultComissao.png';
import pilotos from '../../../mocks/pilotos';
import { BiPlusCircle } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';

const formatarValor = (valor) => `E$ ${(valor / 10000).toFixed(2)}`;

function Equipe() {
  return (
    <div className="flex items-start justify-evenly gap-10 dark:text-white text-[#000b4] w-full pb-[15dvh] overflow-x-hidden">
      <div className="flex flex-col items-start w-fit gap-8">
        <Secao
          titulo="Pilotos"
          elementos={Array(3).fill(<PilotoEscolhido />)}
          elementoExtra={<SemPiloto />}
        />
        <Secao
          titulo="Equipe técnica"
          elementos={[<EquipeTecnica key={0} />]}
        />
        <ResumoEquipe saldo="100,00" total="100,00" />
        <div className="flex items-stretch justify-center gap-4 w-full">
          <button
            onClick={() => {
              localStorage.removeItem('pilotos');
              window.location.reload();
            }}
            className="w-1/3 rounded-md p-3 grid place-items-center bg-gray-300 hover:opacity-70"
          >
            <FaTrash className="text-gray-800" />
          </button>
          <button className="w-full rounded-md p-3 bg-button-gradient hover:opacity-70">
            CONFIRMAR EQUIPE
          </button>
        </div>
      </div>
      <PainelPilotos />
    </div>
  );
}

const Secao = ({ titulo, elementos, elementoExtra }) => (
  <div className="flex flex-col gap-2 w-full">
    <h1 className="text-3xl mb-2 text-[#0000007f] dark:text-[#ffffff7f]">
      {titulo}
    </h1>
    {elementos.map((el, idx) => (
      <div key={idx}>{el}</div>
    ))}
    {elementoExtra && elementoExtra}
  </div>
);

const ResumoEquipe = ({ saldo, total }) => (
  <div className="flex items-center justify-between w-full">
    {['Saldo', 'Total'].map((label, i) => (
      <div key={i}>
        <p>{label}</p>
        <h1 className="text-2xl font-bold">E$ {i === 0 ? saldo : total}</h1>
      </div>
    ))}
  </div>
);

const PainelPilotos = () => {
  const [estadoAtivo, setEstadoAtivo] = useState({
    escolherAtivo: false,
    confirmarAtivo: false,
  });
  const refs = {
    escolherRef: useRef(null),
    confirmarRef: useRef(null),
    confirmadoRef: useRef(null),
  };

  const toggleAtivo = () => {
    setEstadoAtivo({ ...estadoAtivo, escolherAtivo: true });
    refs.escolherRef.current.style.display = 'flex';
  };

  const toggleConfirmar = () => {
    setEstadoAtivo({ ...estadoAtivo, confirmarAtivo: true });
    refs.confirmarRef.current.style.display = 'flex';
  };

  const [pilotoSelecionado, setPilotoSelecionado] = useState({});

  return (
    <div className="relative h-[120dvh] w-1/4">
      <QuartoPainel
        piloto={pilotoSelecionado}
        confirmarRef={refs.confirmarRef}
        escolherRef={refs.escolherRef}
        setEstadoAtivo={setEstadoAtivo}
        confirmadoRef={refs.confirmadoRef}
      />
      <TerceiroPainel
        piloto={pilotoSelecionado}
        confirmarRef={refs.confirmarRef}
        confirmadoRef={refs.confirmadoRef}
        escolherRef={refs.escolherRef}
        setEstadoAtivo={setEstadoAtivo}
      />
      <SegundoPainel
        escolherRef={refs.escolherRef}
        setPilotoSelecionado={setPilotoSelecionado}
        toggleConfirmar={toggleConfirmar}
        confirmarAtivo={estadoAtivo.confirmarAtivo}
      />
      <PrimeiroPainel toggleAtivo={toggleAtivo} estadoAtivo={estadoAtivo} />
    </div>
  );
};

const SemPiloto = ({ classe }) => (
  <div
    className={
      'flex items-center justify-between gap-4 w-full text-center font-semibold text-gray-500 dark:text-white ' +
      classe
    }
  >
    <p>-</p>
    <p>---</p>
    <p className="text-[#47DC11]">E$00,00</p>
  </div>
);

const PilotoEscolhido = () => (
  <div className="flex items-center gap-4 w-full">
    <p className="font-bold text-blue-300">ABT</p>
    <p className="font-semibold dark:text-white">Kevin Van Der Linde</p>
    <p className="font-semibold text-[#47DC11]">E$19,99</p>
  </div>
);

const EquipeTecnica = () => (
  <div className="flex items-center justify-between gap-4 w-full">
    <p className="font-bold text-red-600">ABT</p>
    <p className="font-semibold text-[#47DC11]">E$19,99</p>
  </div>
);

const ImagemPiloto = ({ imagem, toggleAtivo, classe, style }) => (
  <div
    onClick={toggleAtivo}
    style={style}
    className={
      'cursor-pointer hover:opacity-70 size-24 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto ' +
      classe
    }
  >
    <img src={imagem} className="w-full h-full object-cover" />
  </div>
);

const PrimeiroPainel = ({ toggleAtivo, estadoAtivo: { escolherAtivo } }) => {
  const pilotos = JSON.parse(localStorage.getItem('pilotos')) || [];

  const total = Array.from(
    { length: 5 },
    (_, i) => pilotos[i] || { fotoPiloto: defaultPiloto },
  );

  return (
    <div
      className={`relative z-0 w-full h-full bg-no-repeat bg-contain bg-center ${
        escolherAtivo ? 'invisible' : 'visible'
      }`}
      style={{ backgroundImage: `url(${circuito})` }}
    >
      {total.map((piloto, index) => (
        <ImagemPiloto
          key={index}
          toggleAtivo={toggleAtivo}
          imagem={piloto.fotoPiloto || defaultPiloto}
          style={{ marginTop: `${30 + index * 30}%` }}
          classe={`absolute ${index % 2 === 0 ? 'left-8' : 'right-8'}`}
        />
      ))}
      <ImagemComissao classe={'absolute bottom-8 right-8'} />
    </div>
  );
};

const SegundoPainel = ({
  escolherRef,
  toggleConfirmar,
  setPilotoSelecionado,
  confirmarAtivo,
}) => {
  const pilotosSalvos = JSON.parse(localStorage.getItem('pilotos') || '[]');

  const idsPilotosSalvos = pilotosSalvos.map((piloto) => piloto.nome);

  const pilotosNaoSelecionados = pilotos.filter((equipe) =>
    equipe.piloto.some(
      (piloto) => !idsPilotosSalvos.includes(piloto.fotoPiloto),
    ),
  );

  return (
    <div
      className={`w-full h-full absolute top-0 z-10 flex-col items-center gap-16 bg-no-repeat bg-contain bg-center hidden  ${
        confirmarAtivo ? 'hidden' : 'flex'
      }`}
      ref={escolherRef}
      style={{ backgroundImage: `url(${circuitoLimpo})` }}
    >
      <h1 className="text-white text-center text-2xl font-semibold">
        Escolha seu piloto
      </h1>
      <div className="overflow-y-scroll flex flex-col items-start gap-3 w-full pb-40">
        {pilotosNaoSelecionados.map((equipe, idx) => (
          <div key={idx} className="flex flex-col px-6 w-full gap-1">
            <h1
              className="font-semibold text-2xl"
              style={{ color: equipe.corEquipe }}
            >
              {equipe.nomeEquipe}
            </h1>
            <div className="w-full">
              {equipe.piloto.map((piloto, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full"
                >
                  <p className="text-sm">
                    {piloto.nome} {piloto.sobrenome}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-[#47DC11] text-sm">
                      {formatarValor(piloto.precoPiloto)}
                    </p>
                    <BiPlusCircle
                      size={20}
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => {
                        setPilotoSelecionado({
                          ...piloto,
                          nomeEquipe: equipe.nomeEquipe,
                        });
                        toggleConfirmar();
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TerceiroPainel = ({
  confirmarRef,
  confirmadoRef,
  escolherRef,
  piloto,
  setEstadoAtivo,
}) => {
  const confirmarPiloto = () => {
    const pilotos = JSON.parse(localStorage.getItem('pilotos') || '[]');
    localStorage.setItem('pilotos', JSON.stringify([...pilotos, piloto]));
    confirmadoRef.current.style.display = 'flex';
    confirmarRef.current.style.display = 'none';
  };
  return (
    <div
      className="w-full h-full absolute top-0 z-30 flex-col items-center gap-16 hidden bg-no-repeat bg-contain bg-center"
      ref={confirmarRef}
      style={{ backgroundImage: `url(${circuitoLimpo})` }}
    >
      <h1 className="text-white text-center text-2xl font-semibold">
        Piloto selecionado
      </h1>
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="bordao flex flex-col w-4/5 items-center justify-center border-b pb-4">
          <img src={piloto.fotoPiloto} alt="" className="w-4/5" />
          <p className="mt-2 font-semibold text-xl">
            {piloto.nome} {piloto.sobrenome}
          </p>
          <p className="text-sm font-light">{piloto.nomeEquipe}</p>
        </div>
        <p className="text-2xl font-semibold text-[#47dc11]">
          {formatarValor(piloto.precoPiloto)}
        </p>
        <p>Deseja confirmar esse piloto?</p>
        <div className="w-3/5 flex items-center justify-between">
          <button
            className="px-4 py-2 bg-[#47DC11] rounded-md hover:opacity-70"
            onClick={confirmarPiloto}
          >
            Sim
          </button>
          <button
            className="px-4 py-2 bg-[#D5001C] rounded-md hover:opacity-70"
            onClick={() => {
              confirmarRef.current.style.display = 'none';
              escolherRef.current.style.display = 'none';
              setEstadoAtivo({
                escolherAtivo: false,
                confirmarAtivo: false,
              });
            }}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

const QuartoPainel = ({
  piloto,
  confirmadoRef,
  confirmarRef,
  setEstadoAtivo,
  escolherRef,
}) => {
  return (
    <div
      className="w-full h-full absolute top-0 z-30 flex-col items-center gap-16 hidden bg-no-repeat bg-contain bg-center"
      ref={confirmadoRef}
      style={{ backgroundImage: `url(${circuitoLimpo})` }}
    >
      <h1 className="text-white text-center text-2xl font-semibold">
        Piloto confirmado
      </h1>
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="bordao flex flex-col w-4/5 items-center justify-center border-b pb-4">
          <img src={piloto.fotoPiloto} alt="" className="w-4/5" />
          <p className="mt-2 font-semibold text-xl">
            {piloto.nome} {piloto.sobrenome}
          </p>
          <p className="text-sm font-light">{piloto.nomeEquipe}</p>
        </div>
        <p className="text-2xl font-semibold text-[#47dc11]">
          {formatarValor(piloto.precoPiloto)}
        </p>

        <button
          className="py-4 border border-white w-4/5 bg-[#1b1c19] rounded-md hover:opacity-70"
          onClick={() => {
            confirmarRef.current.style.display = 'none';
            escolherRef.current.style.display = 'none';
            confirmadoRef.current.style.display = 'none';
            setEstadoAtivo({
              escolherAtivo: false,
              confirmarAtivo: false,
            });
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

const ImagemComissao = ({ classe }) => (
  <div
    className={
      'hover:opacity-70 size-24 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto ' +
      classe
    }
  >
    <img src={defaultComissao} className="w-full h-full object-cover" />
  </div>
);

export default Equipe;
