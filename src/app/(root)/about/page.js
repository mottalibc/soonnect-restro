import About from "@/components/About";
import BigTitle from "@/components/common/BigTitle";
import { ChevronLast } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <BigTitle text={"About"} className={"bg-aboutBg"} />
      <div className="my-10">
        <About />
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <Link
          className="bg-orange-400 px-4 py-2 rounded-full flex"
          href={"/contact"}
        >
          Contact Us
          <ChevronLast />
        </Link>
      </div>
    </div>
  );
}
