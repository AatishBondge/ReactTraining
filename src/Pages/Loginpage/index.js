import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';
import Toastmessages from './Toastmessages';

export class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            loggedInMessage: '',
            showComponent: false
        };

    }

    handleChange = () => {
        this.setState({ userName: this.userName.value, passWord: this.passWord.value });
    }

    onSubmit = () => {
        const { userName, passWord } = this.state;
        const isValid = this.inputValidation();
        let logStatus = '';
        axios({
            method: 'post',
            url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
            data: {
                "username": userName,  //  trupti.kashid@objectedge.com
                "password": passWord,  //  Objectedge$10
            },
            config: {
                headers: {
                    "Authorization": "Bearer YWRtaW46YWRtaW4=",
                    'Content-Type': 'application/json'
                }
            }
        })
            .then(response => {
                const { changeUser } = this.props;
                if (response.status === 200 && isValid) {
                    logStatus = 'Log In Succesfull !';
                    this.setState({ loggedInMessage: logStatus, showComponent: true });
                    const { access_token, id } = response.data;
                    changeUser({ access_token, id });
                    this.getUserData(access_token, id);
                }
            })
            .catch((error) => {
                console.log(error);
                isValid ? logStatus = 'Log In failed please try again' : logStatus = 'Feilds Required or Space not allowed !';
                this.setState({ loggedInMessage: logStatus, showComponent: true });
            });
        this.setState({ showComponent: false });
    }

    inputValidation = () => {
        const { userName, passWord } = this.state;
        let isValid = false;
        const noSpace = /^\S*$/;
        if (noSpace.test(userName) && noSpace.test(passWord) && userName !== '' && passWord !== '') {
            isValid = true;
        }
        return isValid;
    }

    getUserData = (access_token, id) => {
        const { setUserData } = this.props;
        axios({
            method: 'get',
            url:
                `https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/profiles/current?profileId=${id}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const { profile_user } = response.data;
                setUserData(profile_user);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { showComponent, loggedInMessage } = this.state;
        return (
            <div className="loginPageContainer">
                {showComponent ? <Toastmessages msg={loggedInMessage} /> : null}
                <div className="loginPage">
                    <div className="loginForm" >
                        <h1>Log In</h1>
                        <NavLink to="/login?name=Aatish">Refresh</NavLink>
                        <div className="formGroup">
                            <label htmlFor="userEmail" className="blockLevel labels">Email : </label>
                            <input type="text" className="formControl" name="username" ref={(ref) => { this.userName = ref; }} onChange={this.handleChange} required />
                        </div>
                        <div className="formGroup blockLevel">
                            <label htmlFor="password" className="blockLevel labels">Password : </label>
                            <input type="password" className="formControl" name="password" ref={(ref) => { this.passWord = ref; }} onChange={this.handleChange} />
                        </div>
                        <div className="formGroup blockLevel">
                            <button className="submit" onClick={() => this.onSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="imageContainer" />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        accessToken: state.Access_Token,
        id: state.id,
        user: state.userData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (data) => { dispatch({ type: 'ADD_Access_Token', payload: data }); },
        setUserData: (data) => { dispatch({ type: 'ADD_USER_DATA', payload: data }); }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);