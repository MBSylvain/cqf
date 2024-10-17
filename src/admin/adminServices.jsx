import { useState } from "react";

function AjoutImage() {
    const [images, setImages] = useState([]); // Initialiser avec un tableau vide

    const handleSubmit = (e) => {
        e.preventDefault();

        const nouvelleImage = {
            id: images.length + 1, // Générer un nouvel ID basé sur la longueur du tableau
            titre: e.target.titre.value,
            photo: URL.createObjectURL(e.target.image.files[0]), // Gérer correctement l'entrée du fichier
            descrip: e.target.descrip.value,
            catég: e.target.catégorie.value,
        };

        setImages([...images, nouvelleImage]); // Ajouter la nouvelle image au tableau

        // Réinitialiser les champs du formulaire
        e.target.reset();
    };

    return (
        <div>
            <form
                action=""
                method="post"
                encType="multipart/form-data" // Capitalisation correcte
                onSubmit={handleSubmit} // Utiliser onSubmit au lieu de onClick
            >
                <label htmlFor="image">Image :</label>
                <input type="file" id="image" name="image" />

                <label htmlFor="titre">Titre :</label>
                <input type="text" id="titre" name="titre" />

                <label htmlFor="descrip">Description :</label>
                <input type="text" id="descrip" name="descrip" />

                <label htmlFor="catégorie">Catégorie :</label>
                <select id="catégorie" name="catégorie">
                    {" "}
                    {/* Ajouter l'attribut name */}
                    <option value="bébé">Bébé</option>
                    <option value="couple">Couple</option>
                    <option value="Mariage">Mariage</option>
                    <option value="religion">Religion</option>
                </select>

                <button type="submit">Ajouter</button>
            </form>
            <div className="gallerie-item" id="filtrat" key={images.id}>
                <img className="image" src={images.photo} alt="photo"></img>
            </div>
        </div>
    );
}

export default AjoutImage;
