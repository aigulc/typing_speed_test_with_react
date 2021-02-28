import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home'
import Navbar from "./containers/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CarouselHome from "./containers/Carousel/CarouselHome";
import Register from "./containers/Auth/Register/Register";
import Login from "./containers/Auth/Login/Login";
import AuthContextProvider from "./contexts/AuthContext";
import Company from "./components/Company/Company";
import AddItems from './components/Hero/Admin/AddItems/AddItems';
import ItemList from './components/Hero/Admin/ItemList/ItemList';
import EditItems from './components/Hero/Admin/EditItem/EditItems';
import View from './components/Hero/View/View';
import PaymentForm from "./containers/Card/Card";
import ContextItemProvider from "./contexts/ContextItem";

const Routes = () => {
    return (
        <ContextItemProvider>
        <AuthContextProvider>
        <BrowserRouter>

            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home}/>
                <Route path="/company" component={Company}/>
                <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
                <Route exact path = '/add' component = {AddItems}/>
                <Route exact path = '/list' component ={ItemList}/>
                <Route exact path = '/edit' component ={EditItems}/>
                <Route exact path = '/view' component = {View}/>
                <Route exact path = '/payment' component = {PaymentForm}/>
            </Switch>
        </BrowserRouter>
        </AuthContextProvider>
            </ContextItemProvider>

    );
};

export default Routes;