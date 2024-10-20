import React from "react";

function Home() {
  return (
    <div>
      <div className="hero h-screen">
        <img
          src="./assets/logo charles cantin.png"
          alt="Charle Quantin Logo"
          className="hero-logo justify-items-center"
        />
        <h1 className="text-2xl text-center">
          Bienvenue sur le site web de Charles Quantin.
        </h1>
        <p>
          Photographe professionnel, je vous propose mes services pour
          immortaliser vos plus beaux moments.
        </p>
      </div>
    </div>
  );
}

export default Home;
