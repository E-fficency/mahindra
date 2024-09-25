import Trofeu from '../../assets/cards_equipes/trofeu.svg'
import Podio from '../../assets/cards_equipes/podio.svg'
import Bandeirinha from '../../assets/cards_equipes/bandeirinha.svg'
import equipes from '../../mocks/equipes'


const CardEquipe = () => {

    return (  
        <>
        {equipes.map((equipe) => (
             <div className="flex flex-col items-center px-6 py-6 rounded-xl w-full gap-4 relative z-10 overflow-hidden card-equipe">
                <div className='flex justify-around w-full'>
                    <div>
                        <ul className='flex flex-col gap-3'>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Trofeu} /> {equipe.vitorias}</li>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Podio} /> {equipe.podios}</li>
                            <li className='lista-card-piloto' style={{ color: equipe.cor }}><img src={Bandeirinha} /> {equipe.corridas}</li>
                        </ul>
                    </div>
                    <div className='flex items-end'>
                        <img src={equipe.time} alt="" />
                    </div>
                </div>
                <div className='relative left-1/3 w-[544px] h-[110px] imagem-carro'>
                    <img src={equipe.carro} className=''/>
                </div>

                <img src={equipe.fundo} className='absolute right-0 -z-10 bottom-0 w-3/4'/>
            </div>
        ))}
        </>
    );
}
 
export default CardEquipe;