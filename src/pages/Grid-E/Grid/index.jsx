import { cardsGrid } from '../../../mocks/cards-grid';
import CardGrid from '../CardGrid';

function Grid() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 dark:text-white text-[#000b4]">
      <div className="flex items-stretch justify-stretch flex-row gap-8">
        {cardsGrid.map((card, index) => (
          <CardGrid title={card.title} content={card.content} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
