import React from "react";
const Princing = () => {
  const services = [
    {
      id: 0,
      service: "Photographie de portrait",
      image: "/galleriePrincing/portrait.jpg",
      price: "100€",
      description: "Séance photo de portrait professionnelle.",
    },
    {
      id: 1,
      service: "Photographie de mariage",
      image: "/galleriePrincing/couple.jpg",
      price: "500€",
      description: "Couverture complète de votre mariage.",
    },
    {
      id: 2,
      service: "Photographie de couple",
      image: "/galleriePrincing/couple2.jpg",
      price: "150€",
      description: "Séance photo romantique pour couples.",
    },
    {
      id: 3,
      service: "Photographie de bébé",
      image: "/galleriePrincing/bebe.jpg",
      price: "120€",
      description: "Capturer les premiers moments de votre bébé.",
    },
    {
      id: 4,
      service: "Photographie femme enceinte",
      image: "/galleriePrincing/mother.jpg",
      price: "130€",
      description: "Séance photo pour futures mamans.",
    },
    {
      id: 5,
      service: "Photographie de famille",
      image: "/galleriePrincing/family.jpg",
      price: "200€",
      description: "Séance photo pour toute la famille.",
    },
  ];
  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl text-center font-semibold m-8">
        Prix de mes services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((item) => (
          <div
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            key={item.id}
          >
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={item.image}
              alt={item.service}
            />
            <div className="p-4">
              <h5 className="text-lg font-bold text-gray-800 text-center">
                {item.service}
              </h5>
              <p className="text-gray-600 text-sm text-center mt-2">
                {item.description}
              </p>
              <h5 className="text-xl font-semibold text-gray-900 text-center mt-4">
                {item.price}
              </h5>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
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
export default Princing;
