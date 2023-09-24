import { useState } from "react";
import styles from "./contact.module.css";
import Validation from "../components/validation";
import img1 from "../assets/images/contactImage.jpg"

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleValidation(e) {
    e.preventDefault();

    setErrors(Validation(values));
    e.target.reset();
  }

  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
            <div className={styles.contactCardBody}>
            <img src={img1} className={styles.contactCardImg} />
                <h2 className={styles.contactCardTitle}>Name of the Artist</h2>
                <p className={styles.contactCardPar}> Biography. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
    <form onSubmit={handleValidation} className={styles.formBox} method="post">
      <span>Contact Me</span>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        placeholder="Your name here"
        required
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <input
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="Your email address"
        required
      />
      <input
        type="text"
        name="subject"
        onChange={handleInput}
        placeholder="Subject"
        required
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <textarea
        name="message"
        type="message"
        cols="30"
        rows="10"
        placeholder="Your message here..."
        onChange={handleInput}
        required
      />
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <button type="submit" className={styles.formBtn}>
        Submit
      </button>
    </form>
    </div>
  );
}
