import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";
import InputLogin from "../../components/InputLogin";
import Checkbox from "../../components/Checkbox";
import BotaoLogin from "../../components/BotaoLogin";
import { useEffect } from "react";

const Register = () => {

  useEffect(() => {
    const tema = localStorage.getItem('theme')
    if (tema === 'dark'){
      document.body.classList.add('dark')
    }
  }, [])
  return (
    <>
      <div className="flex justify-center py-12 border-y border-b-black dark: border-b-white">
        <img src={Logo} className="w-1/6" />
      </div>
      <form>
        <div className="flex flex-col items-center gap-2 dark:text-white">
          <h1 className="text-3xl font-medium pt-5">Registrar</h1>
          <p>Já possui uma conta? <Link to={'/login'} className="gradient-text">Logar</Link></p>
        </div>
        <div className="w-full">
            <InputLogin placeholder={'E-mail'} />
            <InputLogin placeholder={'Nome de usuário'}  className='mb-2'/>
            <InputLogin placeholder={'Senha'} eye className='mb-2'/>
            <InputLogin placeholder={'Confirmar senha'} eye className='mb-2'/>
            <Checkbox texto={'Desejo receber atualizações e ofertas em seu e-mail'} />
            <BotaoLogin texto={'Registrar'} />

        </div>
      </form>
    </>
  );
};

export default Register;
