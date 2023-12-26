import React from "react";
import Lottie from 'lottie-react';
import animationData from './j1.json';
const Symptomtracker = () => {
  return <div className="text-center font-bold text-2xl">Symptomtracker
  
  <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ height: "700px"}}
      />
  
  </div>;
};

export default Symptomtracker;
