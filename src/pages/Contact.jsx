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
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <div className="text-center text-3xl font-extrabold m-6 text-gray-800 tracking-tight drop-shadow">
        Contactez-moi
      </div>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full max-w-lg bg-white/80 backdrop-blur border border-gray-200 shadow-xl rounded-2xl p-8 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-800 text-base font-semibold mb-1"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setNom(e.target.value)}
            className={`border ${bordername} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition rounded-lg text-gray-900 text-base mb-1 w-full p-3 outline-none bg-gray-50`}
            maxLength="50"
            placeholder="Votre nom"
            autoComplete="off"
          />
        </div>
        <div>
          <label
            htmlFor="prenom"
            className="block text-gray-800 text-base font-semibold mb-1"
          >
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            className={`border ${borderprenom} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition rounded-lg text-gray-900 text-base mb-1 w-full p-3 outline-none bg-gray-50`}
            maxLength="50"
            placeholder="Votre prénom"
            autoComplete="off"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-800 text-base font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${borderemail} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition rounded-lg text-gray-900 text-base mb-1 w-full p-3 outline-none bg-gray-50`}
            placeholder="Votre adresse email"
            autoComplete="off"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-800 text-base font-semibold mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            className={`border ${bordermessage} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition rounded-lg text-gray-900 text-base mb-1 w-full p-3 outline-none bg-gray-50 resize-none`}
            maxLength="500"
            rows={5}
            placeholder="Votre message (10 à 500 caractères)"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ValidateForm;
