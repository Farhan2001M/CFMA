import React from "react";
import Sidebar from "../../components/Sidebar";
const index = ({ active, setActive, children }) => {
  return (
    <div className="relative max-w-[1728px] mx-auto w-full ">
      <Sidebar active={active} setActive={setActive} />
      <div className=" w-full">
        <div className="    bg-[#F9FBFF] z-0  ">{children}</div>
      </div>
    </div>
  );
};

export default index;
