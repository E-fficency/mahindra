const Pontos = ({titulo, pontos}) => {
  return (
    <>
      <h3 className="mb-6">{titulo}</h3>
      <div className="flex flex-col gap-6 pl-2">
        <div className="font-semibold text-3xl mt-2 h-[60px]">{pontos}</div>
      </div>
    </>
  );
};

export default Pontos;
