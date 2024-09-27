import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo/logo-expandida.svg";
import Line from '../../assets/line.svg'
import LineBlack from '../../assets/line black.svg'
import InputLogin from "../../components/InputLogin";
import Checkbox from "../../components/Checkbox";
import BotaoLogin from "../../components/BotaoLogin";
import { useEffect, useState } from "react";

const Register = () => {

  const [theme, setTheme] = useState('')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
      document.body.classList.add('dark');
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])


  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 gap-7">
        <img src={Logo2} className="w-1/ md:w-1/4 lg:w-1/5" alt="Logo" />
        {theme === 'dark' ? <img src={Line}/> : <img src={LineBlack}/>}
      </div>
      <div className="max-w-md mx-auto px-4">
        <form>
          <div className="flex flex-col items-center gap-4 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-medium ">Registrar</h1>
            <p className="text-center">
              Já possui uma conta? <Link to={'/login'} className="gradient-text">Logar</Link>
            </p>
          </div>
          <div className="w-full mt-4">
            <InputLogin placeholder={'E-mail'} />
            <InputLogin placeholder={'Nome de usuário'} className='mb-2' />
            <InputLogin placeholder={'Senha'} eye className='mb-2' />
            <InputLogin placeholder={'Confirmar senha'} eye className='mb-2' />
            <Checkbox texto={'Desejo receber atualizações e ofertas em seu e-mail'} />
            <BotaoLogin texto={'Registrar'} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
