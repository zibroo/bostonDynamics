import React from 'react';

import LogPage from '../components/LogPage/LogPage';
import Navbar from '../components/Navbar/Navbar';
import YourAccount from '../components/YourAccount/YourAccount';

const AccountPage = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token)
    const token1 = ''
    return (
        <div>
            <Navbar />
            <div>
                <span
                    onClick={() => { localStorage.setItem('token', JSON.stringify(token1)) }}
                    style={{
                        marginLeft: '30px',
                        fontSize: '20px',

                    }}>&#10006;</span>
            </div>
            {token ? <YourAccount /> : <LogPage />}

        </div>
    );
};

export default AccountPage;