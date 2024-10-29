const Liga = () => {
  return (
    <div className="rounded-lg shadow-md border border-[#00000030] mt-7 p-7 h-full">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="rounded-full w-16"
            src="https://github.com/leotaschin.png"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-2xl">E-Fficiency Formula E Team</h2>
            <h3>Leonardo C. Taschin</h3>
          </div>
        </div>
        <div>
          <h3>Ranking</h3>
          <span>8º</span>
        </div>
      </div>

      <div className="min-h-10 mt-10">
        <div className="grid grid-cols-[2fr_0.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col">
            <h3 className="mb-6">Times</h3>

            <div className="flex">
              <span className="mr-6">3</span>
              <span>1º</span>

              <div className="flex gap-4">
                <img
                  className="rounded-full w-14"
                  src="https://github.com/leotaschin.png"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium">Java Formula E</h2>
                  <h3>Leonardo C. Taschin</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-6">Pontos</h3>
            <div className="font-semibold text-3xl">50</div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-6">Vitórias</h3>
            <div className="font-semibold text-3xl">50</div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-6">Saldo</h3>
            <div className="font-semibold text-3xl">50</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Liga;
