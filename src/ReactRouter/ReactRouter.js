import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductListingPage from '../HOC/productListingPage';
import './ReactRouter.scss';
import Home from '../Pages/HomePage';
import Login from '../Pages/Loginpage';
import ProductList from '../Pages/ProductsList';

const ReactRouting = (props) => {
    const { products } = props;
    const ProductsListWithSearch = ProductListingPage(ProductList);
    const { user, changeUser, setUserData } = props;
    return (
        <Router>
            <div>
                <div className='navBar'>
                    <NavLink exact activeClassName="active" className="navMenu" to="/">Home</NavLink>
                    <NavLink activeClassName="active" className="navMenu" to="/login">Login</NavLink>
                    <NavLink activeClassName="active" className="navMenu" to="/about">About</NavLink>
                    <NavLink activeClassName="active" className="navMenu" to="/plp">Products</NavLink>
                    <NavLink activeClassName="active" className="navMenu" to="/search">Search Products</NavLink>
                    {user ? (<>
                        <div>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>
                        <div>
                            <button className='logout' onClick={() => { changeUser('', ''); setUserData(null); }}>Logout</button>
                        </div>
                    </>) : null}
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login"><Login /></Route>
                    <Route path="/about"><div><h1>About Us</h1></div></Route>
                    <Route path="/plp"><ProductList products={products} /></Route>
                    <Route path="/search"><ProductsListWithSearch products={products} /></Route>
                </Switch>
            </div>
        </Router>
    );
};


const mapStateToProps = (state) => {
    return {
        user: state.userData,
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (data) => { dispatch({ type: 'ADD_Access_Token', payload: data }); },
        setUserData: (data) => { dispatch({ type: 'ADD_USER_DATA', payload: data }); },
        addProducts: (data) => { dispatch({ type: 'ADD_PRODUCTS', payload: data }); }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactRouting);
