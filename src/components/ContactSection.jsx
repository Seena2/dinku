import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactSection() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0762fgj",
        "contact_form",
        form.current,
        "Bj-SDaFYHEOEsEm9B"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
          form.current.reset(); // Optionally reset the form
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.", error.text);
        }
      );
  };

  return (
    <section id="contact" className=" contact-section background-white ">
      <div className="section-container ">
        <h1 className="section-heading">Get in touch</h1>

        <p className="section-description">
          Whether you have a question, want to collaborate, or just want to say
          hi, feel free to reach out! I'm always open to discussing new ideas.
        </p>
        <div className="columns-2">
          <div className="card">
            <h5>Contact Information</h5>

            <div className="contact-icon">
              <div className="icon">
                <Mail />
              </div>
              <div className="">
                <h4>Email</h4>
                <a href="mailto:seenadev22@gmail.com">seenadev22@gmail.com</a>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon">
                <Phone />
              </div>
              <div className="">
                <h4>Phone</h4>
                <a href="tel:+251913411396">+251 (913)-411-396</a>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon">
                <MapPin />
              </div>
              <div className="">
                <h4>Location</h4>
                <a>Finifine, Oromia</a>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon">{/* <MapPin /> */}</div>
              <div className="">
                <h4>Connect</h4>
                <div className="social-icons">
                  <a href="#" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter />
                  </a>
                  <a href="#" target="_blank">
                    <Facebook />
                  </a>
                  <a href="#" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h5>Send a message</h5>
            <form className="" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject or title for the enquire "
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Hello there, I like to talk about ..."
                />
              </div>
              <div className="form-group">
                <button type="submit" className="formbtn">
                  Send message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
