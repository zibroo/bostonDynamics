import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import AddProductPage from './pages/AddProductPage';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import ShopPage from './pages/ShopPage';
import SpotPage from './pages/SpotPage';
import ClientContextProvider from './contexts/ClientContext';
import CurrentProductPage from './pages/CurrentProductPage';
import AccountPage from './pages/AccountPage';

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider   >
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/products' component={ProductsPage} />

                        <Route exact path='/shop' component={ShopPage} />
                        <Route exact path='/admin' component={AdminPage} />
                        <Route exact path='/add-product' component={AddProductPage} />
                        <Route exact path="/admin/edit/:id" component={EditPage} />
                        <Route exact path="/shop/product/:id" component={CurrentProductPage} />
                        <Route exact path="/account" component={AccountPage} />


                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;