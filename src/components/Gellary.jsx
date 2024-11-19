import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type == "gallery"][0...3] | order(_createdAt asc)`;
  const data = await client.fetch(query);

  return data;
};

const Gellary = async () => {
  const data = await getData();

  return (
    <section className="px-3 md:px-6">
      <h1 className="text-8xl text-orange-400 my-10 text-center">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((img, i) => (
          <div key={i} className="justify-self-center">
            <Image
              src={urlFor(img.image).url()}
              alt="gallery image"
              height={400}
              width={400}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center my-8">
        <Link
          href={"/gallery"}
          className="text-black bg-orange-400 px-4 py-2 rounded-full"
        >
          See More Photos
        </Link>
      </div>
    </section>
  );
};

export default Gellary;
