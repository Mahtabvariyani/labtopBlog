import React from "react";
import { smallIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-pink-90">
          This is the API Blog 
          each page diffrent api
        </h1>
        <p className="regular-16 mt-6 text-pink-100 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sequi
          autem accusamus. Quia similique, ipsam suscipit sunt odit delectus
          nisi ratione ipsum veritatis beatae? Harum nemo quam tempora beatae
          veritatis?
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {smallIcons.map((icon) => (
              <Link href={icon.href}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  key={icon.key}
                  height={icon.height}
                  width={icon.width}
                />
              </Link>
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-pink-90">
            Lorem, ipsum dolor.
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Check Out List" variant="btn-pink" />
          <Button type="button" title="What we do??" variant="btn-teal" />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[468px] flex-col gap-8 rounded-3xl bg-pink-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-pink-20">Info</p>
            </div>
            <p className="bold-20 text-pink-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, error.</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-pink-20">View</p>
              <p className="bold-20 text-white">50k</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-pink-20">Sugg</p>
              <p className="bold-20 text-pink-20">304k</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
