"use client";
import { useState } from "react";
import axios from "axios";
import Foodie from "./Foodie";
import FoodCard from "./FoodCard";

interface Products {
  title: string;
  id: number;
  image: string;
}

const FoodForm = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [input, setInput] = useState("");

  const getFood = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/products/search?query=${input}&apiKey=${process.env.NEXT_PUBLIC_FOOD_API_KEY}`
      );

      setProducts(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getFood();
  };

  const data = products.map((product) => ({
    id: product.id,
    title: product.title,
    image: product.image,
  }));

  return (
    <div>
      <Foodie />
      <div className="flexEnd mt-10  px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-pink-90  p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-pink-20">
            <strong>Are the Food Calories Important </strong>Wanna know more!!?
          </h2>

          <div className="regular-14 xl:regular-16 mt-5 text-pink-20">
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
                  placeholder="Search for food ..."
                />
                <button type="submit" className="button-form">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodCard  data={data} />
    </div>
  );
};

export default FoodForm;
