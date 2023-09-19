import React, { useState } from 'react';
import "./admin.css";

function AdminSignup() {
  const [admin, setAdmin] = useState({
    adminName: '',
    adminEmail: '',
    adminPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your admin signup logic here
    console.log('Admin signup data:', admin);
  };

  return (
    <div>
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="adminName"
          placeholder="Admin Name"
          value={admin.adminName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="adminEmail"
          placeholder="Admin Email"
          value={admin.adminEmail}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="adminPassword"
          placeholder="Admin Password"
          value={admin.adminPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignup;
