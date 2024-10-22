import { useRef } from 'react';
import circuito from '../../../assets/circuitogrid.svg';
import { useEffect } from 'react';
import piloto from '../../../assets/Times FE/JAGUAR TCS/Mitch Evans.png';

function Equipe() {
  const circuitoRef = useRef(null);

  useEffect(() => {
    circuitoRef.current.style.backgroundImage = `uri(${circuito})`;
  });

  return (
    <div className="flex items-start justify-evenly gap-10 dark:text-white text-[#000b4] w-full pb-[15dvh]">
      <div className="flex flex-col items-start justify-start w-fit gap-8">
        <div className="flex items-start justify-center flex-col gap-2 w-full">
          <h1 className="text-4xl mb-3 text-[#0000007f] dark:text-[#ffffff7f]">
            Pilotos
          </h1>

          <div className="flex items-center justify-start gap-4 w-full">
            <p className="font-bold text-blue-300">ABT</p>
            <p className="font-semibold text-black dark:text-white">
              Kevin Van Der Linde
            </p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
          <div className="flex items-center justify-start gap-4 w-full">
            <p className="font-bold text-blue-300">ABT</p>
            <p className="font-semibold text-black dark:text-white">
              Kevin Van Der Linde
            </p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
          <div className="flex items-center justify-start gap-4 w-full">
            <p className="font-bold text-blue-300">ABT</p>
            <p className="font-semibold text-black dark:text-white">
              Kevin Van Der Linde
            </p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
          <div className="flex items-center justify-start gap-4 w-full">
            <p className="font-bold text-blue-300">ABT</p>
            <p className="font-semibold text-black dark:text-white">
              Kevin Van Der Linde
            </p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
          <div className="flex items-center justify-start gap-4 w-full">
            <p className="font-bold text-blue-300">ABT</p>
            <p className="font-semibold text-black dark:text-white">
              Kevin Van Der Linde
            </p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
        </div>

        <div className="flex items-start justify-center flex-col gap-2 w-full">
          <h1 className="text-4xl mb-3 text-[#0000007f] dark:text-[#ffffff7f]">
            Equipe técnica
          </h1>
          <div className="flex items-center justify-between gap-4 w-full">
            <p className="font-bold text-red-600">ABT</p>
            <p className="font-semibold text-[#47DC11]">E$19,99</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div>
            <p>Saldo</p>
            <h1 className="text-2xl font-bold">E$ 100,00</h1>
          </div>
          <div>
            <p>Total</p>
            <h1 className="text-2xl font-bold">E$ 100,00</h1>
          </div>
        </div>

        <button className="w-full rounded-md p-3 bg-button-gradient hover:opacity-70">
          CONFIRMAR EQUIPE
        </button>
      </div>

      <div
        className={
          'w-2/5 relative grid grid-cols-2 grid-rows-7 bg-no-repeat bg-contain min-h-[190dvh] bg-center'
        }
        ref={circuitoRef}
      >
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto">
          <img src={piloto} />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto">
          <img src={piloto} />
        </div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto">
          <img src={piloto} />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto">
          <img src={piloto} />
        </div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 m-auto">
          <img src={piloto} />
        </div>
        <div className="size-40 rounded-full border-2 border-white overflow-clip bg-neutral-800 absolute top-[90%] left-[85%]">
          <img src={piloto} />
        </div>
      </div>
    </div>
  );
}

export default Equipe;
