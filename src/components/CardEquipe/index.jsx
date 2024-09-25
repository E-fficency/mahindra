import Trofeu from '../../assets/cards_equipes/trofeu.svg'
import Podio from '../../assets/cards_equipes/podio.svg'
import Bandeirinha from '../../assets/cards_equipes/bandeirinha.svg'
import ABT from '../../assets/Times FE/ABT/ABT.SVG'
import ABTCarro from '../../assets/Times FE/ABT/ABT Carro.png'


const CardEquipe = () => {
    return (  
        <>
             <div className="flex flex-col items-center px-6 py-5 rounded-xl w-full gap-6 relative bg-red-500 z-10">
                <div className='flex'>
                    <div>
                        <ul className='flex flex-col gap-3'>
                            <li className='lista-card-piloto'><img src={Trofeu} /> 14</li>
                            <li className='lista-card-piloto'><img src={Podio} /> 47</li>
                            <li className='lista-card-piloto'><img src={Bandeirinha} /> 115</li>
                        </ul>
                    </div>
                    <div>
                        <img src={ABT} alt="" />
                    </div>
                </div>
                <div className=''>
                    <img src={ABTCarro}/>
                </div>
            </div>
        </>
    );
}
 
export default CardEquipe;