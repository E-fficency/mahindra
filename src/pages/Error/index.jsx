import Logo from "../../assets/logo/logo.svg";

const Error404 = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <img 
           src={Logo} alt="Logo"
            className="mx-auto mb-4"
          />
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <p className="text-4xl font-medium text-black-600 mt-6">Página não encontrada</p>
          <p className="text-black-500 mt-4">
            Desculpe, a página que você está procurando não existe.
          </p>
          <p className="text-black-500 mt-0">
            Por favor, retorne ao início para continuar.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Retornar ao início
          </button>
        </div>
      </div>
    );
  };
  
  export default Error404;