import { useState } from "react";

function AjoutPrix() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState(null); // Changed to store the file object

  const handleSubmit = (event) => {
    event.preventDefault();

    const nouveauTitre = event.target.titre.value;
    const nouvelleDescription = event.target.description.value;
    const nouveauPrix = event.target.prix.value;
    const nouvelleImage = event.target.image.files[0]; // Access the file object
    useEffect(() => {
      // Requête au backend pour obtenir des données
      fetch('http://localhost/12.0.0.1/charle quentin')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    // Update state with new values
    setTitre(nouveauTitre);
    setDescription(nouvelleDescription);
    setPrix(nouveauPrix);

    if (nouvelleImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the image as a data URL
      };
      reader.readAsDataURL(nouvelleImage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titre">Titre</label>
        <input type="text" id="titre" name="titre" />

        <label htmlFor="description">Description :</label>
        <input type="text" id="description" name="description" />

        <label htmlFor="prix">Prix :</label>
        <input type="number" id="prix" name="prix" />

        <label htmlFor="image">Image du service</label>
        <input type="file" id="image" name="image" />

        <button type="submit">Ajouter</button>
      </form>

      <section>
        <div className="card">
          <div className="cart-body">
            <h3>{titre}</h3>
            {image && <img src={image} alt="image du service" />}{" "}
            {/* Conditionally render the image */}
          </div>
          <p>{description}</p>
          <p>{prix ? `${prix} €` : ""}</p>
        </div>
      </section>
    </div>
  );
}

export default AjoutPrix;
