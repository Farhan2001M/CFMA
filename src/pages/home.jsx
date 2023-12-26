import React from "react";

const Home = () => {
  return (
    <>
      <img src="./images/hero.png" alt="" className="" />
      {/* <p className="font-bold text-2xl text-center py-4">Why us?</p> */}
      {/* <p className="px-16 text-center pb-4">

      </p> */}

      <div className="flex justify-between items-center gap-4 bg-[#ed3237] p-12 w-full shadow-white shadow-lg my-8 cursor-pointer">
        <div className="text-3xl font-bold text-white p-12 border-r-4 hover:text-black">Find A Doctor</div>
        <div className="text-3xl font-bold text-white p-12  border-r-4 hover:text-black ">Online Reports</div>
        <div className="text-3xl font-bold text-white p-12 border-r-4 hover:text-black ">Tranplant Services </div>
      </div>
     
    </>
  );
};

export default Home;
