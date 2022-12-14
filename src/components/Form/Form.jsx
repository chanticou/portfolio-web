import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useState } from "react";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { NavBar } from "../NavBar/NavBar";

export const Form = () => {
  const form = useRef();
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState(true);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!input.user_name || !input.user_email || !input.message) {
      setErrors(false);
    } else {
      setInput({ user_name: "", user_email: "", message: "" });
      setErrors(false);
      Swal.fire("¡Muchas gracias! El e-mail fue enviado con exito.");
      emailjs
        .sendForm(
          "service_3bom90g",
          "template_f23gavh",
          form.current,
          "LdNY-iThbpDaasQfy"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <NavBar />
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="form_name_label">Name</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="user_name"
          value={input.user_name}
          className="form_name"
        />

        <label className="form_email_label">Email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="user_email"
          value={input.user_email}
          className="form_email"
        />

        <label className="form_message_label">Message</label>
        <textarea
          onChange={(e) => handleChange(e)}
          name="message"
          value={input.message}
          className="form_message"
        />
        <span
          hidden={
            input.user_name && input.user_email && input.message
              ? !errors
              : errors
          }
        >
          <h3 className="form_error">Falta completar datos</h3>
        </span>

        <input className="form_submit_button" type="submit" value="Send" />
      </form>
    </>
  );
};
