import CardEquipe from "../../components/CardEquipe";

const Equipes = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 border-b pb-5 dark:text-white ">
        <h1 className="font-bold text-3xl">Equipes</h1>
        <p>Confira as equipes da temporada</p>
      </div>
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6">
        <CardEquipe />
      </section>
    </>
  );
};

export default Equipes;
