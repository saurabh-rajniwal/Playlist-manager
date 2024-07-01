import { useState } from "react";
import "../modal/Modal.css";

function Modal({ closeModal, addPlaylistHeading }) {
  const [headerText, setHeaderText] = useState("");

  const close = () => {
    if (headerText.trim()) {
      addPlaylistHeading(headerText);
    }
    setHeaderText("");
    closeModal();
  };

  const handlePlaylistHeading = (event) => {
    setHeaderText(event.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <input
          type="text"
          placeholder="Name your playlist"
          value={headerText}
          onChange={handlePlaylistHeading}
        />
        <p>This is modal body</p>
        <button onClick={close}>Save</button>
      </div>
    </div>
  );
}

export default Modal;
