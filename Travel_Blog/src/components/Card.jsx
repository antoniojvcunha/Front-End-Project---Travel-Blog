import { useEffect, useState } from "react";

function Card() {
  const [card, setCard] = useState([]);

  useEffect(function () {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch(
      "https://674111a9d0b59228b7f223f1.mockapi.io/api/v1/cardList"
    );
    const result = await response.json();

    setCard(result);
  }

  return (
    <>
      <div className="bg-gradient-to-b from-transparent to-black mt-[42rem] hover:bg-areia hover:bg-opacity-15 duration-300">
        <div className="text-center">
          <p className="text-3xl">Popular Places</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="text-xl">Where to?</p>
        </div>
        <div className="flex justify-around flex-wrap px-3 py-3 mt-20 gap-8">
          {card.length > 0 ? (
            card.map((cardItem, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${cardItem.image})` }}
                className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-cover bg-center w-96 h-[38rem] flex flex-col justify-end hover:scale-105 duration-500 group"
              >
                <div className="px-6 py-4 text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 duration-1000">
                  <div className="font-bold text-xl mb-2">{cardItem.title}</div>
                  <p className="text-base">{cardItem.description}</p>
                </div>
                <div className="px-6 py-4 bg-black bg-opacity-60">
                  {cardItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
