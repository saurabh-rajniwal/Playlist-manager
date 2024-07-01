import { useState } from "react";
import Searchbar from "../components/searchbar/Searchbar";
import "../pages/Home.css";
import Modal from "../components/modal/Modal";

function Home() {
  const [modalState, setModalState] = useState(false);
  const [playlistHeading, setPlaylistHeading] = useState([]);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const addPlaylistHeading = (newHeading) => {
    setPlaylistHeading((prevHeadings) => [...prevHeadings, newHeading]);
  };

  return (
    <>
      <div className="container">
        <div className="sideMenu">
          <div className="sideMenu_header">
            <span style={{ fontSize: "24px" }}>My Playlist</span>
            <i
              className="fas fa-plus sideMenu_header-icon"
              onClick={openModal}
            ></i>
          </div>
          {playlistHeading.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="mainMenu">
          <div className="searchbarContainer">
            <Searchbar />
          </div>
        </div>
      </div>
      {modalState && (
        <Modal
          closeModal={closeModal}
          addPlaylistHeading={addPlaylistHeading}
        />
      )}
    </>
  );
}

export default Home;
