import React from "react";

function Home() {
  return (
    <div className="h-screen">
      <div className="h-fit mt-10">
        <img
          src="./assets/logo charles cantin.png"
          alt="Charle Quantin Logo"
          className="mx-auto"
        />
        <h1 className="text-2xl text-center">
          Bienvenue sur le site web de Charles Quantin.
        </h1>
        <p className="text-md text-center">
          Photographe professionnel, je vous propose mes services pour
          immortaliser vos plus beaux moments.
        </p>
      </div>
    </div>
  );
}

export default Home;
