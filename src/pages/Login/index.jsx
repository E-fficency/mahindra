import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";
import InputLogin from "../../components/InputLogin";
import BotaoLogin from "../../components/BotaoLogin";
import Checkbox from "../../components/Checkbox";
import { useEffect } from "react";

const Login = () => {


  useEffect(() => {
    const tema = localStorage.getItem('theme')
    if (tema === 'dark'){
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <>
      <div className="flex justify-center py-12 border-b-black border-y">
        <img src={Logo} className="w-1/6"/>
      </div>
      <form className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-center gap-2 dark:text-white">
          <h1 className="text-3xl font-medium pt-5">Login</h1>
          <p>Não possui uma conta? <Link to={'/register'} className="gradient-text">Cadastre-se</Link></p>
        </div>
        <div className="w-full">
            <InputLogin placeholder={'E-mail'} />
            <InputLogin placeholder={'Senha'} eye className='mb-2'/>
            <label className="gradient-text text-sm cursor-pointer">Esqueceu sua senha?</label>
        </div>
            <Checkbox texto={'Lembrar de mim?'}/>
            <BotaoLogin texto={'Entrar'}/>
      </form>
    </>
  );
};

export default Login;
