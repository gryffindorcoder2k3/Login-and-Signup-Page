import React, { useState } from 'react';
import "./admin.css";

function AdminLogin() {
  const [admin, setAdmin] = useState({
    adminEmail: '',
    adminPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your admin login logic here
    console.log('Admin login data:', admin);
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
