import React, { useState } from 'react';
import axios from 'axios';
import './styles/Donation.css';

const Donation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError('You must accept the terms and policies.');
      return;
    }

    const donation = { name, email, amount };

    try {
      console.log('Submitting:', donation);
      await axios.post('http://localhost:5000/donations', donation);
      console.log('Donation submitted successfully!');
      setName('');
      setEmail('');
      setAmount('');
      setTermsAccepted(false);
      setError('');
    } catch (error) {
      console.error('There was an error submitting the donation!', error);
      setError('There was an error submitting the donation!');
    }
  };

  return (
    <div className="donation">
      <form className="donation-form" onSubmit={handleSubmit}>
        <h2>Make a Donation</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label>I accept the terms and policies</label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Donation;
