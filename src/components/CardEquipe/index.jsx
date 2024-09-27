import Trofeu from '../../assets/cards_equipes/trofeu.svg'
import Podio from '../../assets/cards_equipes/podio.svg'
import Bandeirinha from '../../assets/cards_equipes/bandeirinha.svg'
import equipes from '../../mocks/equipes'
import { FaArrowRight } from "react-icons/fa6"


const CardEquipe = () => {

    return (  
        <>
        {equipes.map((equipe) => (
             <div key={equipe.nome} className="flex flex-col items-center px-6 py-6 rounded-xl w-full gap-4 relative z-5 overflow-hidden card-equipe mb-3 xl:w-auto mt-3 xl:bg-slate-100 dark:bg-slate-300 ">
                
                <div className='flex justify-around w-full xl:flex-col xl:gap-2'>
                    <div className='xl:flex xl:flex-col xl:gap-2'>
                        <h2 className='hidden xl:flex text-2xl font-bold items-center'>{equipe.nome} <FaArrowRight color={equipe.cor} /></h2>

                        <ul className='flex flex-col gap-3 xl:flex-row'>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Trofeu} /> {equipe.vitorias}</li>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Podio} /> {equipe.podios}</li>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Bandeirinha} /> {equipe.corridas}</li>
                        </ul>

                    </div>
                    <div className='flex items-end xl:mt-3'>
                        <img src={equipe.time} alt="" />
                    </div>
                </div>
                
                <div className='relative left-1/3 w-[544px] h-[110px] imagem-carro'>
                    <img src={equipe.carro} className=''/>
                </div>

                <img src={equipe.fundo} className='absolute right-0 -z-10 bottom-0 w-3/4 xl:w-auto xl:h-full'/>
            </div>
        ))}
        </>
    );
}
 
export default CardEquipe;