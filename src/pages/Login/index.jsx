import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo/logo-expandida.svg";
import InputLogin from "../../components/InputLogin";
import BotaoLogin from "../../components/BotaoLogin";
import Checkbox from "../../components/Checkbox";
import { useEffect } from "react";

const Login = () => {

  useEffect(() => {
    const tema = localStorage.getItem('theme');
    if (tema === 'dark'){
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <>
      <div className="flex justify-center py-12 border-b-black dark:border-b-white border-y">
        <img src={Logo2} className="w-1/ md:w-1/4 lg:w-1/5" alt="Logo" />
      </div>
      <div className="max-w-md mx-auto px-4">
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-4 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-medium pt-5">Login</h1>
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
