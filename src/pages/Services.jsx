import React from "react";
import CardServices from "../components/card_services";
const Services = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="container ">
        <div className="container">
          <p className="text-2xl font-semibold text-center m-8">
            Mes services de photographie
          </p>
        </div>
        <CardServices />
      </div>
    </div>
  );
};

export default Services;
