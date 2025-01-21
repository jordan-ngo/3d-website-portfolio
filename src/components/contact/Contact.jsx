import "./contact.css"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE.TEMPLATE.ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        },
      );
  };

  return (
    <div className='contact' onSubmit={sendEmail}>
      <div className="cSection">
        <form ref={form}>
          <h1 className="cTitle">Let's keep in touch!</h1>
          <div className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="user_username"
              placeholder="John Doe" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com" />
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button className="formButton">Send</button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact