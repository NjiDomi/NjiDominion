import { React, useState } from "react";
import { Footer } from "../footer/Footer";
import "./contact.css";
import axios from "axios";
import { Modal } from "../modal/Modal";
export const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function openModalBtnn() {
    setOpenModal(true);
  }

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");
    setName("");
    setEmail("");

    try {
      await axios.post("http://localhost:5000/", {
        name,
        email,
        message,
      });
    } catch (e) {
      console.log(e);
    }

    openModalBtnn();
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>Contac Me</h2>
        <p>
          <i>
            I am not always available but I always try my best to be available once in a while <br /> so feel free to leave your messages, I will reply to you whenever I am chanced. <br /> Do not forget am here for you <b>to serve you</b>

          </i>
        </p>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h2>Address</h2>
              <p>Limbe,Cameroon</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h2>Telephone</h2>
              <p>+237679160921</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h2>Email Address</h2>
              <p>dominji@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactform">
          <form action="POST">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name=""
                required="required"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name=""
                required="required"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name=""
                required="required"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <span>Type your message...</span>
            </div>
            <div className="inputBox">
              <input
                type="submit"
                onClick={submit}
                value="Send"
                className="openModalBtn"
              />
            </div>
          </form>
        </div>

        {openModal && <Modal closeModal={setOpenModal} />}
      </div>

      <Footer />
    </section>
  );
};
