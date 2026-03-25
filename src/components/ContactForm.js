import { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("Thanks — your message has been submitted.");
  };

  return (
    <div className="support-contact-wrap">
      <h3>Contact Us</h3>
      <p>Please reach out with any questions you may have.</p>

      <form id="contact-form" method="POST" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <div className="field">
            <input type="text" name="name" id="name" required />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <div className="field">
            <input type="email" name="email" id="email" required />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <div className="field">
            <textarea name="message" id="message" required />
          </div>
        </div>

        <div className="form-row">
          <label></label>
          <div className="field">
            <button type="submit">Submit Form</button>
          </div>
        </div>

        <div id="contact-result" style={{ marginTop: "8px" }}>
          {result}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

