import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Admin.css';

const Admin = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donations from server 
    axios.get('http://localhost:5000/donations')
      .then(response => {
        setDonations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donations!', error);
      });
  }, []);

  // Function to handle deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/donations/${id}`)
      .then(() => {
        // Remove deleted donation from state
        setDonations(donations.filter(donation => donation.id !== id));
        alert('Donation deleted successfully!');
      })
      .catch(error => {
        console.error('There was an error deleting the donation!', error);
      });
  };

  return (
    <div className="admin">
      <h2>Donations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(donation => (
            <tr key={donation.id}>
              <td>{donation.name}</td>
              <td>{donation.email}</td>
              <td>{donation.amount}</td>
              <td>
                <button onClick={() => handleDelete(donation.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
