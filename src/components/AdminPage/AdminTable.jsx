import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { adminContext } from '../../contexts/AdminContext'


const AdminTable = () => {
    const history = useHistory()
    const { getAllProducts, products, deleteProduct } = useContext(adminContext)
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <div className='admin-title'>
                <span>ADMIN PANEL</span>
                <button
                    onClick={() => { history.push('/add-product') }}
                >+</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th colSpan='3'>Description</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        products ? (
                            products.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td className='img-container'>
                                        <img src={item.image} />
                                    </td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button
                                            onClick={() => { deleteProduct(item.id) }}
                                            variant="outline-danger">Delete</Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => { history.push(`/admin/edit/${item.id}`) }}
                                            variant="outline-info">Edit</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (null)
                    }



                </tbody>
            </Table>
        </div>
    );
};

export default AdminTable;