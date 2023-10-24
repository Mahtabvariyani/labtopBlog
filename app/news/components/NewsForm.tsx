"use client";
import React, { useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Image from "next/image";

interface Result {
  article_id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
}

const NewsForm = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [input, setInput] = useState("");

  const getResult = async () => {
    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&q=${input}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getResult();
  };


  const data = results.map((result) => ({
    title: result.title,
    image: result.image_url,
    info: result.link,
    description: result.description,
  }));

  return (
    <div className="m-8">
      <div className="flexCenter w-full flex-col px-6 pb-10 lg:px-20 xl:px-32  ">
        <div className="get-app-news rounded-3xl">
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
              Search News to be UpDated
            </h2>

            <form onSubmit={handleSubmit}>
              <label className="mb-2 text-sm font-medium text-white sr-only dark:text-white w-9">
                Search
              </label>
              <div className="relative">
                <div className="div-design">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  className="input-class"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="News"
                />
                <button type="submit" className="button-form">
                  Search
                </button>
              </div>
            </form>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row"></div>
          </div>

          <div className="flex flex-1 items-center justify-end ">
            <Image src="/News.png" alt="phones" width={550} height={870} />
          </div>
        </div>
      </div>
  
        <NewsCard
         data={data}
        />

    </div>
  );
};

export default NewsForm;
