import React from 'react';
import AllProducts from '../components/AllProducts/AllProducts';
import Navbar from '../components/Navbar/Navbar';
import Paggination from '../components/Paggination/Paggination';

const ShopPage = () => {
    return (
        <>
            <Navbar />
            <AllProducts />
            <Paggination />
        </>
    );
};

export default ShopPage;