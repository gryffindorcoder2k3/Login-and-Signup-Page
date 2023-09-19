import React, { useState } from 'react';
import "./agency.css";

function AgencySignup() {
  const [agency, setAgency] = useState({
    agencyName: '',
    agencyEmail: '',
    agencyPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgency({ ...agency, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your agency signup logic here
    console.log('Agency signup data:', agency);
  };

  return (
    <div>
      <h2>Agency Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="agencyName"
          placeholder="Agency Name"
          value={agency.agencyName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="agencyEmail"
          placeholder="Agency Email"
          value={agency.agencyEmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="agencyPassword"
          placeholder="Agency Password"
          value={agency.agencyPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AgencySignup;
