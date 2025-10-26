import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const ref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // 🔍 Debug: check if .env variables are loaded
    console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, // <-- correct reference
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY, // <-- public key directly
        }
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const isInview = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          variants={listVariant}
          animate={isInview ? "animate" : "initial"}
          ref={form}
          onSubmit={sendEmail}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>

          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John Doe" />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>

          <motion.button className="formButton" type="submit">
            Send
          </motion.button>

          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>

      <div className="cSection">
        <ContactSvg/>
      </div>
    </div>
  );
};

export default Contact;
