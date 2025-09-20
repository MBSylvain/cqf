import React from "react";
const photoData = [
  {
    src: "../assets/man-7115801_1280.jpg",
    alt: "Photographie de portrait",
    description:
      "Capturer votre beauté naturelle et votre personnalité unique.",
  },
  {
    src: "../assets/Mariage.jpg",
    alt: "Photographie de mariage",
    description:
      "Immortadivser votre grand jour avec des photos pleines d'émotions et de détails.",
  },
  {
    src: "../assets/couple.jpg",
    alt: "Photographie d'événement",
    description: "otre amour et votre compdivcité en photo.",
  },
  {
    src: "../assets/bébé.jpg",
    alt: "Photographie de produit",
    description: "Le fruit de votre amour en photo",
  },
  {
    src: "../assets/Femme enceinte.jpg",
    alt: "Photographie d'architecture",
    description: "Capturer la beauté de votre corps en transformation.",
  },
  {
    src: "../assets/famille.jpg",
    alt: "Photographie de paysage",
    description:
      "Immortadivser les moments unique, époustouflants en famille avec des photos inspirantes.",
  },
];
export default function CardServices({ service, description, image }) {
  function handleClick(e) {
    e.preventDefault();
    alert("The link was clicked. et la valeur est " + e.target.value);
  }

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {photoData.map((photo, index) => (
        <div
          key={index}
          className="box-border flex flex-col text-center justify-items-center shadow-md shadow-indigo-800 hover:shadow-2xl "
        >
          <img
            className="rounded-t-lg opacity-70 hover:opacity-100 duration-400"
            src={photo.src}
            alt={photo.alt}
          />
          <p className="text-gray-700 font-semibold text-center">
            {photo.description}
          </p>
          <button
            type="button"
            value={photo.description}
            onClick={handleClick}
            className="btn w-32 mx-auto m-4 bg-indigo-400 hover:bg-indigo-500 shadow-lg shadow-indigo-500 text-white font-bold py-2 px-2 rounded"
          >
            Me contacter
          </button>
        </div>
      ))}
    </div>
  );
}
