import React from "react";
const Services = () => {
  const services = [
    {
      id: 0,
      service: "Photographie de portrait",
      image: "../galleriePrincing/portrait.jpg",
      price: "100€",
      description: "Séance photo de portrait professionnelle.",
    },
    {
      id: 1,
      service: "Photographie de mariage",
      image: "../galleriePrincing/couple.jpg",
      price: "500€",
      description: "Couverture complète de votre mariage.",
    },
    {
      id: 2,
      service: "Photographie de couple",
      image: "../galleriePrincing/couple2.jpg",
      price: "150€",
      description: "Séance photo romantique pour couples.",
    },
    {
      id: 3,
      service: "Photographie de bébé",
      image: "../galleriePrincing/bebe.jpg",
      price: "120€",
      description: "Capturer les premiers moments de votre bébé.",
    },
    {
      id: 4,
      service: "Photographie femme enceinte",
      image: "../galleriePrincing/mother.jpg",
      price: "130€",
      description: "Séance photo pour futures mamans.",
    },
    {
      id: 5,
      service: "Photographie de famille",
      image: "../galleriePrincing/family.jpg",
      price: "200€",
      description: "Séance photo pour toute la famille.",
    },
  ];
  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl text-center font-semibold m-8">
        Prix de mes services{" "}
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {services.map((item) => (
          <div
            className="box-boder bg-slate-500 justify-between shadow-md shadow-slate-400 hover:shadow-xl shadow-purpel-800"
            key={item.id}
          >
            <img
              className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
              src={item.image}
              alt={item.service}
            />

            <div className="container h-fit-content  ">
              <div className="container m-4">
                <h5 className="text-md text-center font-semibold leading-tight">
                  {item.service}
                </h5>
                <p className="w-fit m-4 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="container ">
                <h5 className="mb-2 text-xl text-center font-medium leading-tight">
                  {item.price}
                </h5>
                <p className="text-center text-base">{item.description}</p>
              </div>
              <div className="flex justify-center p-8">
                <button
                  type="button"
                  className="p-2 rounded-xl border border-gray-200 hover:border-purple-500"
                >
                  Acheter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
