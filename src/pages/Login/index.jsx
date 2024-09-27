import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo/logo-expandida.svg";
import InputLogin from "../../components/InputLogin";
import BotaoLogin from "../../components/BotaoLogin";
import Checkbox from "../../components/Checkbox";
import { useEffect, useState } from "react";
import Line from '../../assets/line.svg'
import LineBlack from '../../assets/line black.svg'

const Login = () => {

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
      <div className="flex flex-col items-center justify-center py-12 gap-5">
        <img src={Logo2} className="w-1/ md:w-1/4 lg:w-1/5" alt="Logo" />
        {theme === 'dark' ? <img src={Line}/> : <img src={LineBlack}/>}
      </div>
      <div className="max-w-md mx-auto px-4">
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-4 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-medium ">Login</h1>
            <p className="text-center">
              Não possui uma conta? <Link to={'/register'} className="gradient-text">Cadastre-se</Link>
            </p>
          </div>
          <div className="w-full mt-4">
            <InputLogin placeholder={'E-mail'} />
            <InputLogin placeholder={'Senha'} eye className='mb-2'/>
            <label className="gradient-text text-sm cursor-pointer">Esqueceu sua senha?</label>
          </div>
          <Checkbox texto={'Lembrar de mim?'}/>
          <BotaoLogin texto={'Entrar'}/>
        </form>
      </div>
    </>
  );
};

export default Login;
