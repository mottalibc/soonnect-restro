import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlignCenter } from "lucide-react";
import Image from "next/image";
import { NavLinks } from "@/constants/navLinks";

const MobileNav = () => {
  return (
    <div className="md:hidden w-full flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          height={30}
          width={30}
          alt="logo"
          className="h-auto"
        />
      </Link>

      {/* NavLinks */}
      <nav>
        <Drawer>
          <DrawerTrigger asChild>
            <AlignCenter className="text-white" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle />
            <DrawerDescription />
            <div className="h-60 flex flex-col gap-2 items-center pt-10">
              {NavLinks?.map((navLink) => (
                <DrawerClose key={navLink?.title} asChild>
                  <Link href={navLink?.path}>{navLink?.title}</Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </div>
  );
};

export default MobileNav;
