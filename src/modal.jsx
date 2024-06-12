import React, { useState, useRef, useEffect } from "react";
import "./modal.css";

export default function Modalform({ setOpenModal }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    alert("Form submitted successfully!");
    setUsername("");
    setEmail("");
    setPhoneNumber("");
    setDob("");
  };

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <form onSubmit={handleSubmit} className="view">
          <h1 className="title">Fill Details</h1>
          <label>Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Email Address:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Phone Number:</label>
          <input
            id="phone"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label>Date of Birth:</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
