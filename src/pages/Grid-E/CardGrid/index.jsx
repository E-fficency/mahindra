function CardGrid({title, content}) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="border border-[#00000080] dark:border-[#ffffff87] rounded-xl p-4 flex-1 items-center justify-center text-center flex">
        <p className="text-[#000b3]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default CardGrid