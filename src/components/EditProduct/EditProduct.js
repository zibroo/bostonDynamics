import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const { id } = useParams()
    const [editedProduct, setEditedProduct] = useState(productToEdit)

    useEffect(() => {
        getProductToEdit(id)
    }, [])
    useEffect(() => {
        setEditedProduct(productToEdit)
    }, [productToEdit])

    function handleInputs(e) {
        let obj = {
            ...editedProduct,
            [e.target.name]: e.target.value
        }

        setEditedProduct(obj);
    }
    const history = useHistory();
    function saveProduct(e) {

        let savedProduct = {
            ...editedProduct,
            price: +editedProduct.price,
            likes: +editedProduct.likes
        }
        saveEditedProduct(savedProduct)

    }

    return (
        <>
            {
                editedProduct ? (
                    <div>
                        <div className='edit-product-title'>
                            <span>EDIT PRODUCT</span>
                        </div>
                        <div className='edit-product-inputs'>

                            <form>
                                <input name='title' value={editedProduct.title} onChange={handleInputs} className='edit-input' type='text' placeholder='TITLE' />
                                <input name='price' value={editedProduct.price} onChange={handleInputs} className='edit-input' type='number' placeholder='PRICE' />
                                <input name='description' value={editedProduct.description} onChange={handleInputs} className='edit-input' type='text' placeholder='DESCRIPTION' />
                                <input name='image' value={editedProduct.image} onChange={handleInputs} className='edit-input' type='text' placeholder='IMAGE' />
                                <input name='type' value={editedProduct.type} onChange={handleInputs} className='edit-input' type='text' placeholder='TYPE' />
                                <input name='likes' value={editedProduct.likes} onChange={handleInputs} className='edit-input' type='number' placeholder='LIKES' />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editedProduct.title ||
                                            !editedProduct.price ||
                                            !editedProduct.description ||
                                            !editedProduct.image ||
                                            !editedProduct.type ||
                                            !editedProduct.likes) {
                                            alert('Заполните все поля')
                                            return
                                        }
                                        else {
                                            saveProduct()
                                            history.push('/admin')

                                        }

                                    }}
                                >SAVE</button>
                            </form>
                        </div>
                    </div >
                ) : (null)
            }
        </>

    );
};

export default EditProduct;