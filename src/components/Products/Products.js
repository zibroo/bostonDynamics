import React from 'react';
import { useHistory } from 'react-router';

import background from '../../images/back.jpg'
import Spot from '../Divs/Spot/Spot';
import Stretch from '../Divs/Stretch/Stretch';
const Products = () => {

    return (
        <div>
            <div className="main-products" >
                <div className="text-container">
                    <p>Products</p>
                </div>

            </div>
            <div className="margin-for-top"></div>
            <Spot />
            <div className="margin-for-top"></div>
            <Stretch />
        </div>
    );
};

export default Products;