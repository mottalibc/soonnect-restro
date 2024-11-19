import BigTitle from "@/components/common/BigTitle";
import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const getData = async (category) => {
  const query = `*[categories == '${category}']`;
  const data = await client.fetch(query);

  return data;
};

const page = async ({ params }) => {
  const paramsdata = await params;
  const data = await getData(paramsdata?.category);
  return (
    <div>
      <BigTitle text={paramsdata?.category} className={"bg-menuBg"} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 px-20">
        {data?.map((food, idx) => (
          <div key={idx} className="shadow-sm border rounded-md">
            <Image
              src={urlFor(food.image).url()}
              height={300}
              width={300}
              alt="food"
              className="h-[200px] w-[300px] object-cover rounded-t-md"
            />

            <div className="mt-10 px-4 pb-4">
              <h1 className="text-2xl text-orange-400 font-semibold">
                {food?.title}
              </h1>
              <p>{food?.description}</p>
              <h2 className="font-semibold text-xl">{food?.price} Taka</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
