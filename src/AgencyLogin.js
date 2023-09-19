import React, { useState } from 'react';
import "./agency.css";

function AgencyLogin() {
  const [agency, setAgency] = useState({
    agencyEmail: '',
    agencyPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgency({ ...agency, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your agency login logic here
    console.log('Agency login data:', agency);
  };

  return (
    <div>
      <h2>Agency Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AgencyLogin;
