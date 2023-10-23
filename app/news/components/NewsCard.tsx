import Image from "next/image";
import React from "react";

interface CardData {
  title: string;
  image: string;
  info: string;
  description: string;
}
interface Props {
  data: CardData[];
}

function NewsCard({ data }: Props) {
  return (
    <div>
      <div className="flex flex-wrap -m-4 justify-center">
        {data.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-pink-20 dark:border-gray-700">
              {card.image ? (
                <Image src={card.image} width={400} height={400} alt="image" className="p-3" />
              ) : (
                <Image src="/nerdman.png" width={400} height={400} alt="image" className="p-3" />)
              }

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black truncate">
                    {card.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400 truncate">
                  {card.description}
                </p>
                <a
                  href={card.info}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;
