import BigTitle from "@/components/common/BigTitle";
import Menu from "@/components/Menu";
import React from "react";

const page = () => {
  return (
    <div>
      <BigTitle text={"Menu"} className={"bg-menuBg"} />
      <Menu />
    </div>
  );
};

export default page;
