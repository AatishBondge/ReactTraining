import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch,} from 'react-router-dom';
import './ReactRouter.scss';
import Home from '../Pages/HomePage';
import Login from '../Pages/Loginpage';

const ReactRouting = () => {
    return(
    <Router>
        <div>
            <div className='navBar'>
                <NavLink exact activeClassName="active" className="navMenu" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" className="navMenu" to="/login">
                    Login
                </NavLink>
                <NavLink activeClassName="active" className="navMenu" to="/about">
                    About
                </NavLink>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login"><Login/></Route>
                <Route path="/about"><h1>About Us</h1></Route>
            </Switch>
        </div>
    </Router>            
    );
};
export default ReactRouting;
