import React, { useState } from "react";
import ReferYourFriend from "../assets/refer_your_friend.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function Popup({ openModal, setOpenModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [courseError, setCourseError] = useState("");

  const closePopup = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!course) {
      setCourseError("Please select a course");
      isValid = false;
    } else {
      setCourseError("");
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/referrals", {
          name,
          email,
          phone,
          course,
        });
  
        if (response.status === 201) {
          alert("Referral submitted successfully!");
          // Clear the form
          setName("");
          setEmail("");
          setPhone("");
          setCourse("");
          setOpenModal(false);
        }
      } catch (error) {
        console.error("Error submitting referral:", error);
        alert("Failed to submit referral. Please try again later.");
      }
    }
  };
  

  return (
    <div
      className="fixed flex justify-center items-center z-20 w-full h-full"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={closePopup}
    >
      <div
        className="absolute z-20 flex bg-stone-200 rounded-2xl w-[60%]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={ReferYourFriend}
          className="w-100 rounded-l-2xl"
          alt="Refer a friend image"
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl absolute right-5 top-5 hover:bg-stone-300 px-2 py-1 rounded-full cursor-pointer"
          onClick={closePopup}
        />
        <div className="w-full">
          <div className="text-center">
            <h1 className="font-bold text-3xl py-3">
              Refer Your
              <span className="text-blue-700"> Friend!</span>
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-around items-center gap-4 h-70 mt-7"
          >
            <input
              type="text"
              className="border-b-1 w-[70%] outline-none"
              placeholder="Enter friend's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p className="text-red-600 text-sm">{nameError}</p>
            )}

            <input
              type="email"
              className="border-b-1 w-[70%] outline-none"
              placeholder="Enter friend's email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-600 text-sm">{emailError}</p>
            )}

            <input
              type="tel"
              className="border-b-1 w-[70%] outline-none"
              placeholder="Friend's phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <p className="text-red-600 text-sm">{phoneError}</p>
            )}

            <div className="flex justify-center relative w-[70%]">
              <select
                className="border-b-1 w-full outline-none"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="" disabled>
                  Select a course
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Product Management">Product Management</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Cfo">Cfo</option>
                <option value="Finance">Finance</option>
                <option value="Digital Transformation">
                  Digital Transformation
                </option>
              </select>
            </div>
            {courseError && (
              <p className="text-red-600 text-sm">{courseError}</p>
            )}

            <button
              type="submit"
              className="z-10 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 px-8 py-2 text-[15px] rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
