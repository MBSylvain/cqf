import { useState } from "react";
function imputAnnonce() {
  const [InputEvent, setInputEvent] = useState("");
  function annonce(event) {
    event.preventDefault();
    const Annonces = document.querySelector("#annonce").value;
    setInputEvent(Annonces);
    
  }

  return (
    <div className="imputAnnonce">
      <form method="post" onSubmit={annonce}>
        <input
          type="text"
          id="annonce"
          name="annonce"
          value={InputEvent.value}
          placeholder="Votre annonce"
        ></input>
        <button type="submit" className="button">
          Envoyer
        </button>
      </form>
    </div>
  );
}
export default imputAnnonce;
