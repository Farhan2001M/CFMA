import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ active, setActive }) => {
  const featurelist = [
    { name: "Appointment Schduler", link: "/appointmentschdeular" },
    {
      name: "Symptom Tracker",
      link: "/symptomtracker",
    },
    {
      name: "Dosage Tracker",
      link: "/dosagetracker",
    },
    // { name: "Data Visuals", link: "/datavisuals" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className=" bg-white shadow-lg  w-full py-2 ">
      <div className="px-8 flex just-between items-center w-full">
        <Link to="/">
          <p
            className="text-black text-[22px] font-bold py-4 whitespace-nowrap"
            onClick={() => setActive(-1)}
          >
            Cystic Fibroses
          </p>
        </Link>

        <div className="pb-4 flex w-full ">
          <ul className="flex gap-12 w-full justify-end items-center">
            {featurelist.map((item, index) => {
              return (
                <Link to={item.link}>
                  <li key={index} className=" text-[16px] py-2 ">
                    <div
                      className="flex gap-2"
                      onClick={() => {
                        setActive(active == index ? -1 : index);
                      }}
                    >
                      <p
                        className={`hover:text-red-500 cursor-pointer font-semibold   ${
                          active == index ? "text-red-500" : "text-[#334D6E]"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
