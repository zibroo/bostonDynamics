import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';

const CurrentProduct = () => {
    const { getProductToPage, productToPage, addFavorites, checkProductInFavorites, saveEditedProduct } = useContext(clientContext)
    const { id } = useParams()

    useEffect(() => {
        getProductToPage(id)
    }, [])
    const [thisProduct, setThisProduct] = useState(productToPage)
    useEffect(() => {
        setThisProduct(productToPage)
    }, [productToPage])
    function likePlus() {
        let i = checkProductInFavorites(thisProduct.id) ? 1 : -1
        let obj = { ...thisProduct, likes: thisProduct.likes + i }
        setThisProduct(obj)
        saveEditedProduct(thisProduct)
    }


    const [newRate, setNewRate] = useState(null)
    function calcRate(rate) {

        let newRate = +rate
        let newRating = ((thisProduct.rating * thisProduct.reviews) + newRate) / (thisProduct.reviews + 1)
        console.log(newRating)


        let obj = { ...thisProduct, rating: newRating.toFixed(1), reviews: thisProduct.reviews + 1 }
        setThisProduct(obj)
        saveEditedProduct(thisProduct)
    }
    const [newCommit, setNewCommit] = useState('')
    function addCommit(commit) {
        thisProduct.commits.push(commit)
        saveEditedProduct(thisProduct)
    }
    console.log(thisProduct)
    return (
        <div>
            {
                thisProduct ? (
                    <>
                        <div className='current-product-main-container'>
                            <div className='current-product-image'>
                                <img src={thisProduct.image} />
                            </div>
                            <div className='current-product-text'>
                                <span className='current-product-title'>{thisProduct.title}</span>
                                <div className='current-product-price-container'>
                                    <span className='current-product-rate'>{thisProduct.rating} &#9733;</span>
                                    <span className='current-product-price'>${thisProduct.price}</span>
                                    <span className='current-product-buy'>BUY</span>

                                </div>
                                <div className='current-product-desc'>{thisProduct.description}</div>
                                <div className='current-product-rating'>
                                    <span
                                        onClick={() => {
                                            likePlus()
                                            addFavorites(thisProduct)
                                        }}
                                        style={

                                            checkProductInFavorites(productToPage.id) ? { color: 'black' } : { color: 'red' }
                                        }
                                        className='rating-heart'>
                                        &#x2661;
                                    </span>
                                    <span className='rating-number'>{thisProduct.likes} </span>
                                </div>
                            </div>
                        </div>

                        <div className='commits'>
                            <span className='commits-title'>REVIEWS</span>
                            <div className='send-rate'>
                                <input min="0" max="5" onChange={(e) => {

                                    setNewRate(e.target.value)
                                }} placeholder='rate' type='number' />
                                <button
                                    onClick={() => { calcRate(newRate) }}
                                >SEND</button>
                            </div>

                            <div className='send-commit'>
                                <input
                                    onChange={(e) => { setNewCommit(e.target.value) }}
                                />
                                <button
                                    onClick={() => { addCommit(newCommit) }}
                                >ADD COMMIT</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='commits-div'>
                                {


                                    thisProduct.commits.map((commit) => (
                                        <div className='coment'>
                                            <span>{commit}</span>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </>
                ) : (null)
            }

        </div>
    );
};

export default CurrentProduct;