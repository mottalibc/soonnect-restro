import { twMerge } from "tailwind-merge";

const BigTitle = async ({ text, className }) => {
  return (
    <section className={twMerge("relative w-full", className)}>
      <div className={`bg-GradientOverlay h-[300px] md:h-[400px]`}>
        <div className="h-[300px] md:h-[400px] flex flex-col justify-center">
          <h1 className="text-6xl md:text-9xl text-orange-300 text-center bottom-3">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BigTitle;
