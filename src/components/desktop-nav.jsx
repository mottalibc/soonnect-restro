import { NavLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <div className="hidden w-full md:flex flex-col justify-center items-center px-28">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={"/logo-full.png"} height={150} width={150} alt="Logo" />
      </Link>

      {/* navigation link */}
      <nav className="flex gap-6">
        {NavLinks?.map((navlink) => (
          <Link
            className="bg-white hover:bg-orange-400  px-4 rounded-full"
            key={navlink?.title}
            href={navlink?.path}
          >
            {navlink?.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNav;
