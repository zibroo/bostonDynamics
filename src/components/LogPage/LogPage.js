import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';

const LogPage = () => {
    const { createNewAccount, login } = useContext(clientContext)
    const history = useHistory()
    const [newAccount, setNewAccount] = useState({
        email: '',
        password: '',

    })
    function handleChange(e) {
        let obj = {
            ...newAccount,
            [e.target.name]: e.target.value
        }
        setNewAccount(obj)

    }
    function handleClickToSignUp(e) {
        e.preventDefault()
        createNewAccount(newAccount, history)
    }
    function handleClickToLogin(e) {
        e.preventDefault()
        login(newAccount, history)
    }
    return (
        <div style={{ display: 'flex' }}>
            <div className="log-container">
                <span>
                    LOGIN/SIGN UP

                </span>
                <div className="log-inputs">
                    <div className="logs">
                        <input onChange={handleChange} value={newAccount.email} name='email' type="text" placeholder='Email ' />
                        <input onChange={handleChange} value={newAccount.password} name='password' type="password" placeholder='Password ' />
                    </div>

                    <div className="log-btns">
                        <button onClick={handleClickToLogin} className="log-btn1">LogIn</button>
                        <button onClick={handleClickToSignUp} className="log-btn2">SignUp</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default LogPage;