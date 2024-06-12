import React from "react";
import "./modal.css";

export default function ModalForm({ closeModal }) {
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

    // Check if the phone number is 10 digits long
    if (!/^\d{10}$/.test(usernumber)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(userDob);
    const today = new Date();
    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be a future.");
      return;
    }

    // If all validations pass, close the modal
    closeModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Fill Details</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" name="useremail" id="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="text" name="usernumber" id="phone" required />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" name="userDob" id="dob" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
