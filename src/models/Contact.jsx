import React, { useState } from "react";
import Button from "../layouts/Button";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import axios from "axios";

const Contact = ({ closeForm }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState('')
  const [Age, setAge] = useState('')
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ResponseMessage, setResponseMessage] = useState('');
  const [ResponseTrue, setResponseTrue] = useState(false);

  // FIREBASE INITIALIZING
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDhrHhqSfj5iiwX_1Tz__uMqqa6JoS7_c",
    authDomain: "revitalize-contact-form.firebaseapp.com",
    databaseURL: "https://revitalize-contact-form-default-rtdb.firebaseio.com",
    projectId: "revitalize-contact-form",
    storageBucket: "revitalize-contact-form.appspot.com",
    messagingSenderId: "177377408161",
    appId: "1:177377408161:web:842ee34fc31a325b0cace0"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();

  const messagesRef = ref(database, "messages");



  function submitFormData() {
    const apiUrl = 'https://revitalize-contact-form-default-rtdb.firebaseio.com/revitalize-contact-form.json';
    if (FirstName && LastName && Email && PhoneNumber && Age && Gender) {
      debugger
      try {
        debugger
        const response = axios.post(apiUrl, {
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          phoneNumber: PhoneNumber,
          age: Age,
          gender: Gender
        });
        setResponseMessage("Data submitted successfully")
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setAge('')
        setGender('')
        setResponseTrue(true)
        setTimeout(() => {
          closeForm();
          setResponseMessage("");
        }, 3000);
        return response.data;
      } catch (error) {
        setResponseMessage("Error submitting data")
        setResponseTrue(false)
        throw error;
      }
    } else {
      alert("Please fill required fields")
    }
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="popup-form absolute mt-12 text-black w-full md:w-96">
    <div className="w-full space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              max={10}
              value={Age}
              onChange={(e) => e.target.value?.length <= 3 && setAge(e.target.value)}
              placeholder="Age"
            />
          </div>
          <div className="flex flex-col">
            <select onChange={(e) => setGender(e.target.value)} class="py-3 px-2 bg-[#d5f2ec] rounded-lg block w-full px-4 py-2 mt-2 text-base border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md">
              <option value="" selected>Select Gender</option>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              max={10}
              value={PhoneNumber}
              onChange={(e) => e.target.value?.length <= 10 && setPhoneNumber(e.target.value)}
              placeholder="Phone No."
            />
          </div>
          {ResponseMessage && <div className="flex flex-col">
            <h1 className="text-green">{ResponseMessage}</h1>
          </div>}
          <div className="flex gap-5">
            <button disabled={ResponseTrue} className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500" onClick={(e) => submitFormData()}>Book Appointment</button>
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
