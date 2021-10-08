import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { clientContext } from '../../contexts/ClientContext';
import searchIcon from '../../images/searchIcon.png';

const AllProducts = () => {
    const { getAllProducts, currentItems, changePage, getTypes, types } = useContext(clientContext)
    useEffect(() => {
        getAllProducts()
    }, [])
    const history = useHistory()
    //SEARCH START 
    const [searchValue, setSearchValue] = useState('')

    const searchProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        console.log(search);
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setSearchValue(search.get("q"));
        getAllProducts()
        changePage(1)

    }
    let search = new URLSearchParams(history.location.search);
    useEffect(() => {
        setSearchValue(search.get("q") || "")
    }, [history.location])
    //SEARCH END

    //Filter START
    const [type, setType] = useState('')

    const filterProducts = (key, value) => {
        if (value === '&#10060;') {
            resetFilter()
            return
        }
        let searchFilter = new URLSearchParams(history.location.search)
        searchFilter.set(key, value)
        let url = `${history.location.pathname}?${searchFilter.toString()}`
        history.push(url)
        setType(searchFilter.get("type"))
        getAllProducts()
        changePage(1)

    }
    let searchFilter = new URLSearchParams(history.location.search);

    useEffect(() => {
        setType(searchFilter.get("type"));
        getTypes();
    }, [history.location])

    const resetFilter = () => {
        setType("");
        history.push("/shop");
        getAllProducts();
    }
    //Filter END
    return (
        <>
            {
                currentItems ? (
                    <>
                        <div className="title">
                            <span >ALL PRODUCTS</span>

                            <div className="search-inp">
                                <input
                                    onChange={(e) => {

                                        searchProducts('q', e.target.value)
                                    }}
                                    value={searchValue}
                                ></input>
                                {
                                    types ? (
                                        <Form.Select
                                            onClick={(e) => { filterProducts('type', e.target.value) }}
                                            className="filter-select" size="sm">
                                            {
                                                types.map(item => (
                                                    <option

                                                        value={item}
                                                        key={item}
                                                    >{item}</option>
                                                ))
                                            }

                                            <option value={'&#10060;'}>&#10060;</option>
                                        </Form.Select>
                                    ) : (null)
                                }


                            </div>

                        </div>
                        <div className="products-container">
                            {
                                currentItems.map(item => (
                                    <div>
                                        <img src={item.image} />
                                        <div className="products-text">
                                            <span
                                                onClick={() => { history.push(`/shop/product/${item.id}`) }}
                                                className="products-title">{item.title}</span>
                                            <div className='products-description'>
                                                <p className='products-price'>${item.price}.00</p>
                                                <p className='products-texts'>
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

export default AllProducts;