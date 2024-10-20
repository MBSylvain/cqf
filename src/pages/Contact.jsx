import { useState } from "react";

function ValidateForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let bordername = "border-gray-400";
  let borderprenom = "border-gray-400";
  let borderemail = "border-gray-400";
  let bordermessage = "border-gray-400";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const messageRegex = /^.{10,500}$/;

  // Validation du champ "Nom"
  if (
    nom === "" ||
    !/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(nom) ||
    nom.length < 2 ||
    nom.length > 50
  ) {
    bordername = "border-red-400";
  } else {
    bordername = "border-green-400";
  }
  // Validation du champ "Prénom"
  if (
    prenom === "" ||
    !/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(prenom) ||
    prenom.length < 2 ||
    prenom.length > 50
  ) {
    borderprenom = "border-red-400";
  } else {
    borderprenom = "border-green-400";
  }
  // Validation du champ "Email"
  if (email === "" || !emailRegex.test(email)) {
    borderemail = "border-red-400";
  } else {
    borderemail = "border-green-400";
  }
  // Validation du champ "Message"
  if (message === "" || !messageRegex.test(message)) {
    bordermessage = "border-red-400";
  } else {
    bordermessage = "border-green-400";
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center text-2xl font-semibold m-4">
        <p className="text-center text-2xl font-semibold m-4">
          {" "}
          Contactez-moi{" "}
        </p>
      </div>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="container w-1/2 m-4 bg-white border border-gray-400 shadow-md rounded p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nom:
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setNom(e.target.value)}
            className={`border ${bordername} rounded-md text-gray-700 text-sm font-bold mb-2 w-full p-2`}
            maxLength="50"
            placeholder="Tapez votre nom ici"
          />
        </div>
        <p>{nom}</p>
        <div className="mb-4">
          <label
            htmlFor="prenom"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Prénom:
          </label>
          <input
            type="text"
            id="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            className={`border ${borderprenom} rounded-md text-gray-700 text-sm font-bold mb-2 w-full p-2`}
            maxLength="50"
            placeholder="Tapez votre prénom ici"
          />
        </div>
        <p>{prenom}</p>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${borderemail} rounded-md text-gray-700 text-sm font-bold mb-2 w-full p-2`}
            placeholder="Tapez votre adresse email ici"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            className={`border ${bordermessage} rounded-md text-gray-700 text-sm font-bold mb-2 w-full p-2`}
            maxLength="500"
            placeholder="Tapez votre message ici"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ValidateForm;
