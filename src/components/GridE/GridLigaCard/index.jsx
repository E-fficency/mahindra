import Logo from '../../../assets/user.svg'

const GridCardUser = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-center bg-[#00000005] rounded-lg shadow-md border border-[#00000030] mt-7 p-7 w-full xl:w-auto dark:bg-[#00000034] dark:text-white">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl">Liga FIAP</h2>
                    <h4 className="font-medium text-base">Última rodada</h4>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <span className='text-[#2b9421]'>+29</span>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <span className='text-[#DA1E1E]'>-29</span>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <span className='text-[#2b9421]'>+29</span>
                </div>
                <div className='flex justify-between gap-6 items-center mb-4'>
                    <div>
                        <img src={Logo} className='bg-white rounded-full border-black border p-3'/>
                    </div>
                    <div className='flex flex-col '>
                        <h3>Usuário1</h3>
                        <p className='font-light'>@userformulaE</p>
                    </div>
                    <span className='text-[#2b9421]'>+29</span>
                </div>
            </div>
        </>
    );
}
 
export default GridCardUser;