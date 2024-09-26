import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo/logo-expandida.svg";
import InputLogin from "../../components/InputLogin";
import Checkbox from "../../components/Checkbox";
import BotaoLogin from "../../components/BotaoLogin";
import { useEffect } from "react";

const Register = () => {

  useEffect(() => {
    const tema = localStorage.getItem('theme');
    if (tema === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <>
      <div className="flex justify-center py-12 border-y border-b-black dark:border-white">
        <img src={Logo2} className="w-1/ md:w-1/4 lg:w-1/5" alt="Logo" />
      </div>
      <div className="max-w-md mx-auto px-4">
        <form>
          <div className="flex flex-col items-center gap-4 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-medium pt-5">Registrar</h1>
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
