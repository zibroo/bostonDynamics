import React, { useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext';

const Paggination = () => {
    const { changePage, totalItems, itemsPerPage, currentPage } = useContext(clientContext)
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(pageNumber)

    return (
        <div className="pages">
            <div className="page-container">
                {
                    pageNumber.map(item => (
                        <div
                            onClick={() => {
                                function scrollUp() { window.scrollTo({ top: 100, behavior: 'smooth' }) }
                                setTimeout(scrollUp, 400)
                                changePage(item)
                            }}
                            className={currentPage === item ? 'selected-page' : 'page'} >
                            <span>{item}</span>
                        </div>
                    ))
                }


            </div>

        </div>
    );
};

export default Paggination;