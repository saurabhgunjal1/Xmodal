import { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import ModalForm from "./assets/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setOpenModal(true)}>Open Form</button>
      {openModal && <ModalForm closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
