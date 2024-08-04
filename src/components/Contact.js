import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and policies.');
      return;
    }
    console.log('Form submitted:', { firstName, lastName, email, phone, message });
    alert('Thanks for submitting!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTermsAccepted(false);
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mvgpaqyd" method="post">
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="terms">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label>
            I accept the <a href="#">terms and policies</a>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
