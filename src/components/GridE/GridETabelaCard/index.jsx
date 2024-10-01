import Logo from '../../../assets/user.svg'

const GridETabelaCard = () => {
    return (
        <>
         <div className="flex flex-col justify-start items-center bg-[#00000003] rounded-lg shadow-md border border-[#00000030] mt-7 p-7 w-full xl:w-auto dark:bg-[#00000034] dark:text-white">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl">Liga FIAP</h2>
                    <h4 className="font-medium text-base">Tabela atualizada</h4>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <span className='text-3xl'>1</span>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <span className='text-3xl'>2</span>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <span className='text-3xl'>3</span>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <span className='text-3xl'>4</span>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                </div>
                
            </div>
        </>
    );
}
 
export default GridETabelaCard;