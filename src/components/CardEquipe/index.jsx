import Trofeu from '../../assets/cards_equipes/trofeu.svg'
import Podio from '../../assets/cards_equipes/podio.svg'
import Bandeirinha from '../../assets/cards_equipes/bandeirinha.svg'
import ABT from '../../assets/Times FE/ABT/ABT.SVG'
import ABTCarro from '../../assets/Times FE/ABT/ABT Carro.png'
import Fundo from '../../assets/fundo.svg'


const CardEquipe = () => {
    return (  
        <>
             <div className="flex flex-col items-center px-6 py-6 rounded-xl w-full gap-4 relative z-10 overflow-hidden">
                <div className='flex justify-around w-full'>
                    <div>
                        <ul className='flex flex-col gap-3'>
                            <li className='lista-card-piloto'><img src={Trofeu} /> 14</li>
                            <li className='lista-card-piloto'><img src={Podio} /> 47</li>
                            <li className='lista-card-piloto'><img src={Bandeirinha} /> 115</li>
                        </ul>
                    </div>
                    <div className='flex items-end'>
                        <img src={ABT} alt="" />
                    </div>
                </div>
                <div className='relative left-1/3 w-[554px] h-[138px]'>
                    <img src={ABTCarro} className=''/>
                </div>

                <img src={Fundo} className='absolute right-0 -z-10 bottom-0 h-full' />
            </div>
        </>
    );
}
 
export default CardEquipe;