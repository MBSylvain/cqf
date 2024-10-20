import React, { useState } from "react";
function Gallery() {
  const list = [
    {
      id: 1,
      url: "../gallerie/baby-21249_1280.jpg",
      catégorie: "bébé",
    },
    {
      id: 2,
      url: "../gallerie/baby-feet-1527456_1280.jpg",
      catégorie: "bébé",
    },
    {
      id: 3,
      url: "../gallerie/baby-feet-1527456_1280.jpg",
      catégorie: "bébé",
    },
    {
      id: 4,
      url: "../gallerie/bride-1255520_1280.jpg",
      catégorie: "bébé",
    },
    {
      id: 5,
      url: "../gallerie/couple-1194312_1280 (1).jpg",
      catégorie: "couple",
    },
    {
      id: 6,
      url: "../gallerie/couple-1869206_1280.jpg",
      catégorie: "couple",
    },
    {
      id: 7,
      url: "../gallerie/happy-7223110_1280.jpg",
      catégorie: "bébé",
    },
    {
      id: 8,
      url: "../gallerie/heart-529607_1280.jpg",
      catégorie: "couple",
    },
    {
      id: 9,
      url: "../gallerie/wedding-1353829_1280.jpg",
      catégorie: "Mariage",
    },
    {
      id: 10,
      url: "../gallerie/wedding-7608565_1280.jpg",
      catégorie: "Mariage",
    },
    {
      id: 11,
      url: "../gallerie/buddhist-5695220_1280.jpg",
      catégorie: "religion",
    },
    {
      id: 12,
      url: "../gallerie/incense-1961430_1280.jpg",
      catégorie: "religion",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    console.log("Valeur sélectionnée :", selectedValue);
  };

  const filterByCategory = (category) => {
    if (category === "all") {
      return list;
    }
    return list.filter((item) => item.catégorie === category);
  };

  return (
    <div className="flex flex-col container mx-auto m-4">
      <p className="text-2xl font-semibold text-center m-2">
        Ma Galerie d'Images
      </p>

      <div className="container flex flex-row mx-auto w-screen justify-center">
        <button
          className="rounded-xl border-2 border-gray-200 p-2 m-2"
          onClick={() => handleCategoryChange({ target: { value: "all" } })}
        >
          Afficher toutes les catégories
        </button>

        <button
          className="rounded-xl border-2 border-gray-200 p-2 m-2"
          onClick={() => handleCategoryChange({ target: { value: "bébé" } })}
        >
          Bébé
        </button>
        <button
          className="rounded-xl border-2 border-gray-200 p-2 m-2"
          onClick={() => handleCategoryChange({ target: { value: "couple" } })}
        >
          Couple
        </button>
        <button
          className="rounded-xl border-2 border-gray-200 p-2 m-2"
          onClick={() => handleCategoryChange({ target: { value: "Mariage" } })}
        >
          Mariage
        </button>
        <button
          className="rounded-xl border-2 border-gray-200 p-2 m-2"
          onClick={() =>
            handleCategoryChange({ target: { value: "religion" } })
          }
        >
          Religion
        </button>
      </div>
      <div className="container mx-auto">
        <p className="text-2xl font-bold text-center m-2">
          Ma Galerie d'Images {selectedCategory}
        </p>
      </div>
      <div className="h-fit-content grid grid-cols-3 gap-4">
        {filterByCategory(selectedCategory).map((item) => (
          <div className="w-45" id="filtrat" key={Math.random(item.id)}>
            <img
              className="rounded-md"
              src={item.url}
              alt={item.catégorie}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
