import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const query = `*[_type == "gallery"] | order(_createdAt asc)`;
  const data = await client.fetch(query);

  return data;
};

export const revalidate = 60;

const FullGallery = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-1 md:px-6">
      {data?.map((img, i) => (
        <div key={i} className="justify-self-center">
          <Image
            src={urlFor(img.image).url()}
            alt="gallery image"
            height={400}
            width={400}
            className="h-[400] w-[400px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default FullGallery;
