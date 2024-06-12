import React, { useState } from "react";
import Modalform from "./modal";
// import "./Modal.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button type="button" onClick={handleOpen}>
        Open Form
      </button>

      {open && <Modalform setOpenModal={setOpen} />}
    </div>
  );
}
