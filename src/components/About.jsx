import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center">
        <div className="px-6 my-10 md:my-0 md:pl-10">
          <h1 className="text-7xl text-orange-400">About-Coxs Bazar</h1>
          <p>
            Coxs Bazar, renowned for its worlds longest natural sea beach, is a
            vibrant destination combining scenic coastal beauty with a rich
            cultural heritage. A restaurant in this area offers diners not only
            delicious, fresh seafood and regional delicacies but also a unique
            experience surrounded by breathtaking ocean views and the refreshing
            coastal breeze.
          </p>
        </div>
        <div className="inline-flex justify-center md:justify-end">
          <Image
            src={"/hero.jpg"}
            height={700}
            width={400}
            alt="Cox's bazar beach image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
