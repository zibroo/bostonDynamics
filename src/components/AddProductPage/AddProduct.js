import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { adminContext } from '../../contexts/AdminContext'

const AddProduct = () => {
    const { addNewProduct } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        type: "",
        likes: '',
        rating: 0,
        reviews: 0,
        commits: [],

    })
    function handleInputs(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value.trim()
        }

        setNewProduct(obj)
    }
    const history = useHistory()
    function postProduct(e) {
        let productToPost = {
            ...newProduct,
            price: +newProduct.price,
            likes: +newProduct.likes
        }
        addNewProduct(productToPost)
        history.push('/admin')
    }
    return (
        <div>
            <div className='add-product-title'>
                <span>ADD PRODUCT</span>
            </div>
            <div className='add-product-inputs'>

                <form>
                    <input name='title' value={newProduct.title} onChange={handleInputs} className='product-input' type='text' placeholder='TITLE' />
                    <input name='price' value={newProduct.price} onChange={handleInputs} className='product-input' type='number' placeholder='PRICE' />
                    <input name='description' value={newProduct.description} onChange={handleInputs} className='product-input' type='text' placeholder='DESCRIPTION' />
                    <input name='image' value={newProduct.image} onChange={handleInputs} className='product-input' type='text' placeholder='IMAGE' />
                    <input name='type' value={newProduct.type} onChange={handleInputs} className='product-input' type='text' placeholder='TYPE' />
                    <input name='likes' value={newProduct.likes} onChange={handleInputs} className='product-input' type='number' placeholder='LIKES' />
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            if (!newProduct.title.trim() ||
                                !newProduct.price.trim() ||
                                !newProduct.description.trim() ||
                                !newProduct.image.trim() ||
                                !newProduct.type.trim() ||
                                !newProduct.likes.trim()) {
                                alert('Заполните все поля')
                                return
                            }
                            else {
                                postProduct()

                            }

                        }}
                    >ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;