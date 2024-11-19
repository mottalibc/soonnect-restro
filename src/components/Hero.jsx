import React from "react";

const Hero = () => {
  return (
    <>
      <section className="static overflow-hidden bg-bgHero bg-cover bg-bottom bg-no-repeat ">
        <div className="w-full h-screen flex items-center justify-center bg-GradientOverlay">
          <div className="text-center px-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white">
              Welcome!
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Experience the best of Coastal Flavors: The Taste of Coxs Bazar
            </h2>

            <button className="bg-orange-400 hover:bg-white rounded-full px-4 py-2 mt-6">
              <a href="tel:01855745531">Book A table</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
