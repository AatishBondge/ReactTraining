import React ,{Component} from 'react';
import axios from 'axios';
import './style.css';

import Toastmessages from './Toastmessages';

export class loginpage extends Component{
    constructor(props){
        super(props); 
        this.state={
            userName : '',
            passWord : '',
            loggedInMessage : '',
            showComponent: false
        } ;
        
    }

    handleChange = ()=>{
        this.setState({ userName: this.userName.value, passWord : this.passWord.value });
    }
 
    onSubmit = () => {
        const destructuredState = this.state;
        const destructuredProps =this.props;
        const isValid = this.inputValidation();   
        let logStatus = '';         
          axios({
            method: 'post',
            url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
            data: {
                "username": destructuredState.userName,  //  trupti.kashid@objectedge.com
                "password": destructuredState.passWord,  //  Objectedge$10
            },
            config: { headers: {
                    "Authorization":"Bearer YWRtaW46YWRtaW4=",
                    'Content-Type': 'application/json'
                }
            }
            })
            .then(response => {
              if(response.status === 200 && isValid){
                logStatus = 'Log In Succesfull !';
                this.setState({loggedInMessage: logStatus});
                this.setState({showComponent : true});
                destructuredProps.loginStatus();
              }
            })
            .catch( () => {
                isValid ? logStatus = 'Log In failed please try again' : logStatus = 'Feilds Required or Space not allowed !';
                this.setState({loggedInMessage: logStatus});
                this.setState({showComponent : true});
            });
        this.setState({showComponent : false});
      }  

      inputValidation = () => {
        const destructuredState = this.state;
        let isValid = false;
        if(/^\S*$/.test(destructuredState.userName) && /^\S*$/.test(destructuredState.passWord) && destructuredState.userName !== '' && destructuredState.passWord !== ''){
            isValid = true;
        }
        return isValid;
    }  

    render() {
        const destructuredState = this.state;
        return (
            <div className="loginPageContainer">
            {destructuredState.showComponent ? <Toastmessages msg={destructuredState.loggedInMessage}/> : null}
                <div className="loginPage">                            
                    <div className="loginForm" >
                        <h1>Log In</h1>
                        <div className="formGroup">
                            <label htmlFor="userEmail" className="blockLevel labels">Email : </label>
                            <input type="text" className="formControl" name="username" ref={(ref) => {this.userName = ref;}} onChange={this.handleChange} required/>
                        </div>
                        <div className="formGroup blockLevel">
                            <label htmlFor="password" className="blockLevel labels">Password : </label>
                            <input type="password" className="formControl" name="password" ref={(ref) => {this.passWord = ref;}} onChange={this.handleChange}/>                
                        </div>
                        <div className="formGroup blockLevel">
                            <button className="submit" onClick={() => {this.onSubmit();}}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="imageContainer"/>
            </div>
        );
    }
}
export default loginpage;