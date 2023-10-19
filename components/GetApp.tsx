import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
<section className="flexCenter w-full flex-col px-6 pb-10 lg:px-20 xl:px-32 ">
      <div className="get-app rounded-3xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get the Plan now For Free!
          </h2>
          <p className="regular-16 text-pink-20">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem eaque quia provident tempore nesciunt aspernatur praesentium exercitationem, quo quasi veniam accusantium voluptatum nam aperiam veritatis porro corporis quis consectetur.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Contact"
              icon="/callmail.png"
              variant="btn-pink"
              full
            />
            <Button
              type="button"
              title="Download The Plan"
              icon="/Download.png"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end ">
          <Image src="/ptrn.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
