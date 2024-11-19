import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const query = `*[_type == "categories"]`;
  const data = await client.fetch(query);

  return data;
};

const Menu = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-20 my-10 gap-4">
        {data.map((category, idx) => (
          <Link key={idx} href={`menu/${category?.title}`}>
            <div className="bg-slate-100 border shadow-sm px-6 py-3 w-[200px]">
              <Image
                src={urlFor(category.image).url()}
                height={300}
                width={300}
                alt="menu-image"
                className="rounded-full h-[150px] w-[150px] object-cover"
              />
              <div className="py-4">
                <h1 className="text-2xl text-center font-medium">
                  {category.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
