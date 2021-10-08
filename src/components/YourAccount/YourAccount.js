import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';

const YourAccount = () => {
    const { favorites, getFav } = useContext(clientContext)
    useEffect(() => {
        getFav()
        console.log(favorites)
    }, [])
    let userOnline = JSON.parse(localStorage.getItem('userEmail'))
    const [adminCheck, setAdminCheck] = useState(false)
    console.log(userOnline)


    const history = useHistory()
    return (
        <>
            {
                favorites ? (
                    <>
                        <div className="title-fav">
                            <span className="title-fav1">YOUR ACCOUNT</span>
                            {
                                userOnline === 'ibraim.ra@mail.ru' ? <span className='adminPush' onClick={() => { history.push('/admin') }}>Admin</span> : null
                            }
                            <span >FAVORITES</span>



                        </div>
                        <div className="products-container-fav">
                            {
                                favorites.products.map(item => (
                                    <div>
                                        <img src={item.image} />
                                        <div className="products-text-fav">
                                            <span
                                                onClick={() => { history.push(`/shop/product/${item.id}`) }}
                                                className="products-title-fav">{item.title}</span>
                                            <div className='products-description-fav'>
                                                <p className='products-price-fav'>${item.price}.00</p>
                                                <p className='products-texts-fav'>
                                                    {item.description}
                                                </p>
                                                <span
                                                    onClick={() => { history.push(`/shop/product/${item.id}`) }}
                                                >Learn more &#8594;</span>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </>
                ) : (<h2>Loading...</h2>)
            }

        </>
    );
};

export default YourAccount;