"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flexBetween bg-pink-90 mt-3 max-container padding-container relative z-30 py-5">
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16  text-pink-20 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src="/menu.png"
        className="inline-block cursor-pointer lg:hidden"
        width={54}
        height={24}
        alt="menu"
      />
    </nav>
  );
};

export default NavBar;
