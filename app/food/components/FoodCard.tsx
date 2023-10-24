import Image from "next/image";
import React from "react";

interface CardData {
  title: string;
  image: string;
}

interface Props {
  data: CardData[];
}

export default function FoodCard({ data }: Props) {
  return (
    <div>
      <div className="flex flex-wrap -m-4 justify-center  mt-8">
        {data.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-pink-90 dark:border-gray-700">
              {card.image ? (
                <Image
                  src={card.image}
                  width={400}
                  height={400}
                  alt="image"
                  className="p-3 w-400 h-400"
                />
              ) : (
                <Image
                  src="/recepie.png"
                  width={400}
                  height={400}
                  alt="image"
                  className="p-3"
                />
              )}

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black truncate">
                    {card.title}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
