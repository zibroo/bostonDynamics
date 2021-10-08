import React, { useState } from 'react';
import { useHistory } from 'react-router';

import burgerMenu from '../../images/list.png';
import searchIcon from '../../images/searchIcon.png';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const history = useHistory()

    return (
        <>
            <div className="navbar">
                <div className='container h-100'>
                    <div className="nav h-100">
                        <div className="nav-left">
                            <img onClick={() => { history.push('/') }} className='nav-logo' src='https://www.bostondynamics.com/themes/custom/isovera/logo.svg' alt='logo' />

                        </div>
                        <div className="nav-right">
                            <ul className='nav-list'>
                                <li
                                    onClick={() => { history.push('/products') }}
                                    className='nav-item'
                                >PRODUCTS</li>
                                <li
                                    onClick={() => { history.push('/shop') }}
                                    className='nav-item'
                                >SHOP</li>

                                <li onClick={() => { history.push('/account') }} className='nav-item'>YOUR ACCOUNT</li>
                                <li
                                    onClick={() => {
                                        history.push('/shop')
                                        function scrollUp() { window.scrollTo({ top: 100, behavior: 'smooth' }) }
                                        setTimeout(scrollUp, 700)
                                    }}
                                    className='search-icon'>
                                    <img src={searchIcon} />
                                </li>
                            </ul>
                            <div className='nav-btn'>
                                {
                                    mobileNavOpen ?
                                        (null) :
                                        (<button onClick={() => { setMobileNavOpen(!mobileNavOpen) }}>
                                            <img src={burgerMenu} alt='burger-menu' />
                                        </button>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                mobileNavOpen ? (<div className="navbar-mobile">
                    <div className="container">
                        <div className='cancel-block'>
                            <span onClick={() => { setMobileNavOpen(false) }}>&#10006;</span>
                        </div>
                        <ul>
                            <li onClick={() => { history.push('/products') }}>PRODUCTS</li>
                            <li onClick={() => { history.push('/shop') }}>SHOP</li>

                            <li onClick={() => { history.push('/account') }}>YOUR ACCOUNT</li>

                        </ul>
                    </div>

                </div>) : (null)
            }

        </>
    );
};

export default Navbar;