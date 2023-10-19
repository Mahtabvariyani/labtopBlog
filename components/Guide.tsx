import React from "react";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 bg-pink-20 mb-10 pt-10">
  
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Find The Right Plan
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae? Itaque cum voluptatibus vero quidem distinctio? Mollitia corporis, obcaecati ea quia, doloremque est sint veniam atque cum eligendi aliquid esse iste debitis delectus temporibus tempore ex, error molestiae. Dolore optio labore nisi in. Minus repellat corrupti, reprehenderit quia maiores ipsam. Commodi cumque consequatur at necessitatibus tenetur, aliquid magnam deserunt neque eaque voluptas placeat sunt, impedit quaerat odit, voluptatum cum numquam animi fugiat a enim consectetur cupiditate? Earum quo temporibus eos?
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/apps.jpg"
          alt="guide"
          width={1040}
          height={480}
          className=" ml-10 mr-10 object-cover object-center  rounded-3xl  "
        />

        <div className="absolute flex bg-yellow-50 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-black">Downloads</p>
                <p className="bold-16 text-black">48 Per Day</p>
              </div>
              <p className="bold-20 text-black mt-2">Twitter, Facebook</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-black">Follow track</p>
              <h4 className="bold-20 mt-2 text-black  whitespace-nowrap">
                Google, LinkedIn
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
