import React from "react";
import CardServices from "../components/card_services";
const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="container">
        <div className="container">
          <p className="text-2xl m-8">Mes services de photographie</p>
        </div>
        <CardServices
          description={"testons la"}
          image={"../assets/Mariage.jpg"}
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/man-7115801_1280.jpg"
              alt="Photographie de portrait"
            />
            <h3 className="text-black text-bold">Portrait</h3>

            <p className="text-black">
              Capturer votre beauté naturelle et votre personnalité unique.
            </p>
          </div>

          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/Mariage.jpg"
              alt="Photographie de mariage"
            />
            <h3 className="text-md">Mariage</h3>
            <p>
              Immortadivser votre grand jour avec des photos pleines d'émotions
              et de détails.
            </p>
          </div>
          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/couple.jpg"
              alt="Photographie d'événement"
            />
            <h3 className="font-semibold italic">Photographie de couple</h3>

            <p>votre amour et votre compdivcité en photo.</p>
          </div>
          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/bébé.jpg"
              alt="Photographie de produit"
            />
            <h3>Photographie de bébé</h3>
            <p>Le fruit de votre amour en photo.</p>
          </div>
          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/Femme enceinte.jpg"
              alt="Photographie d'architecture"
            />
            <h3>Photographie femme enceinte</h3>
            <p>Capturer la beauté de votre corps en transformation.</p>
          </div>
          <div className="box-boder justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-pink-400">
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src="../assets/famille.jpg"
              alt="Photographie de paysage"
            />
            <h3>Photographie de famille</h3>
            <p>
              Immortadivser les moments unique, époustouflants en famille avec
              des photos inspirantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
