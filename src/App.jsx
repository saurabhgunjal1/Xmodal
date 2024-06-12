// app.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";

Modal.setAppElement("#root");

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const username = e.target.username.value;
    const useremail = e.target.useremail.value;
    const usernumber = e.target.usernumber.value;
    const userDob = e.target.userDob.value;

    // Check if any field is empty
    if (!username || !useremail || !usernumber || !userDob) {
      alert("All fields are required!");
      return;
    }

    // Check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(useremail)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Check if the phone number is 10 digits long
    if (!/^\d{10}$/.test(usernumber)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Check if the date of birth is a future date
    const dobDate = new Date(userDob);
    const today = new Date();
    if (dobDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // If all validations pass, close the modal
    handleClose();
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button type="button" onClick={handleOpen}>
        Open Form
      </button>

      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal-content">
          <h3>Fill Details</h3>
          <form onSubmit={handleSubmit} className="modalform">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" name="useremail" id="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="text" name="usernumber" id="phone" required />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" name="userDob" id="dob" required />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
