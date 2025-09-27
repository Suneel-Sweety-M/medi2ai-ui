import React from "react";
import Hero from "./Hero";
import Results from "./Results";
import Charts from "./Charts";
import Choose from "../../Who-We-Serve/Choose";
import OurSuccess from "../../Who-We-Serve/Success"; // Your existing component

const ChartReview = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      <Hero />
      <Results />
      <Charts />
      <OurSuccess /> 
      <div className="max-w-7xl mx-auto ">
       <Choose />
      </div>
    </div>
  );
};

export default ChartReview;
