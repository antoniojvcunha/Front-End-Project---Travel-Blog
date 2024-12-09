import { useEffect, useState } from "react";
import { Link } from "wouter";

function Card({ continent }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch(
      "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
    );
    const result = await response.json();

    const filteredCards = result.filter(
      (cardItem) => cardItem.continent === continent
    );
    setCard(filteredCards);
  }

  return (
    <>
      <div className="hover:bg-areia hover:bg-opacity-15 duration-300">
        <div className="flex justify-around flex-wrap px-3 py-3 mt-20 gap-8">
          {card.length > 0 ? (
            card.map((cardItem, index) => (
              <Link key={cardItem.id} href={`/locations/${cardItem.slug}`}>
                <div
                  style={{ backgroundImage: `url(${cardItem.thumbnail})` }}
                  className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-cover bg-center w-[38rem] h-[18rem] flex flex-col justify-end text-center hover:scale-105 duration-500 group"
                >
                  <div className="px-6 py-4 text-white bg-black bg-opacity-60 opacity-80 group-hover:opacity-100 duration-1000">
                    <div className="font-bold text-xl mb-2">
                      {cardItem.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
