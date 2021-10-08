import axios from 'axios';
import React, { useReducer, useState, useEffect } from 'react';
import { API } from '../helpers/const';
export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    types: null,
    productToPage: null,
    favorites: null

}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_TYPES":
            return { ...state, types: action.payload }
        case "GET_PRODUCT_TO_PAGE":
            return { ...state, productToPage: action.payload }
        case 'GET_FAVORITES':
            return { ...state, favorites: action.payload }
        default:
            return { ...state }
    }
}
const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    //READ
    const getAllProducts = async () => {
        const { data } = await axios(`${API}${window.location.search}`)
        dispatch({
            type: "GET_ALL_PRODUCTS",
            payload: data
        })
    }

    //PAGINATION START
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(6)

    useEffect(() => {
        const fetchProducts = () => {
            const data = state.products || [];
            setItems(data)
        }
        fetchProducts()
    }, [state.products])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    const totalItems = items.length

    const changePage = (newPage) => {
        setCurrentPage(newPage)
    }
    //PAGINATION END

    //GET TYPES
    const getTypes = async () => {
        const { data } = await axios(API);
        const arr = [];
        data.forEach(element => {
            arr.push(element.type)
        });
        const newArr = [];
        arr.forEach(elem => {
            let check = newArr.filter(item => item.trim() === elem.trim());
            if (check.length === 0) {
                newArr.push(elem)
            }
        })
        dispatch({
            type: "GET_TYPES",
            payload: newArr
        })
    }

    //GET PRODUCT TO PAGE
    const getProductToPage = async (id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "GET_PRODUCT_TO_PAGE",
            payload: data
        })
    }
    //Favorites
    const addFavorites = (product) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                products: [],

            }
        }
        let newProduct = product

        let newFav = favorites.products.filter(item => item.id === product.id)
        if (newFav.length) {
            favorites.products = favorites.products.filter(item => item.id !== product.id)
        }
        else {
            favorites.products.push(newProduct)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))


    }
    const checkProductInFavorites = (id) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites) {
            return false
        }
        let newFav = favorites.products.filter(item => item.id === id)
        return !newFav.length ? true : false;
    }
    const getFav = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        dispatch({
            type: 'GET_FAVORITES',
            payload: favorites

        })
    }
    //Favorites

    const saveEditedProduct = async (editedProduct) => {
        await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
        getAllProducts()
    }

    // registration
    const createNewAccount = async (newAccount, history) => {
        try {
            const data = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/registration', newAccount)
            alert('Account created successfully')
            // history.push('/main')
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
    const login = async (user, history) => {
        try {
            const { data } = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/login', user)
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('userEmail', JSON.stringify(user.email))




            history.push('/')
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    //registration end


    return (
        <clientContext.Provider value={{

            //read
            getAllProducts, products: state.products,
            //paggination
            currentItems, changePage, totalItems, itemsPerPage, currentPage,
            //filter
            getTypes, types: state.types,
            //GET PRODUCT TO PAGE
            getProductToPage, productToPage: state.productToPage,
            //favorites
            addFavorites, checkProductInFavorites, getFav,
            saveEditedProduct, favorites: state.favorites,
            //registration 
            createNewAccount, login,



        }}>
            {children}

        </clientContext.Provider>
    );
};

export default ClientContextProvider;