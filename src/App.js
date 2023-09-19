import React, { useState } from 'react';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import AgencyLogin from './AgencyLogin';
import AgencySignup from './AgencySignup';

function App() {
    const [currentPage, setCurrentPage] = useState('userLogin');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="App">
            <div className="button-container">
                <button onClick={() => handlePageChange('userLogin')}>User Login</button>
                <button onClick={() => handlePageChange('userSignup')}>User Signup</button>
                <button onClick={() => handlePageChange('adminLogin')}>Admin Login</button>
                <button onClick={() => handlePageChange('adminSignup')}>Admin Signup</button>
                <button onClick={() => handlePageChange('agencyLogin')}>Agency Login</button>
                <button onClick={() => handlePageChange('agencySignup')}>Agency Signup</button>
            </div>

            <div className="form-container">
                {currentPage === 'userLogin' && <UserLogin />}
                {currentPage === 'userSignup' && <UserSignup />}
                {currentPage === 'adminLogin' && <AdminLogin />}
                {currentPage === 'adminSignup' && <AdminSignup />}
                {currentPage === 'agencyLogin' && <AgencyLogin />}
                {currentPage === 'agencySignup' && <AgencySignup />}
            </div>
        </div>
    );
}

export default App;
