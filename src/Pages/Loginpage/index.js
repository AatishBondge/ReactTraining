import React ,{Component} from 'react';
import './style.css';
import axios from 'axios';
import Toastmessages from './Toastmessages';

export class loginpage extends Component{
    constructor(props){
        super(props) 
        this.state={
            userName : '',
            passWord : '',
            loggedInMessage : '',
            showComponent: false
        } 
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({ userName: this.userName.value });
        this.setState({ passWord : this.passWord.value });
    }
    inputValidation(){
        let isValid = false;
        if(/^\S*$/.test(this.state.userName) && /^\S*$/.test(this.state.passWord) && this.state.userName !== '' && this.state.passWord !== ''){
            isValid = true
        }
        return isValid;
    }
    onSubmit = () => {
        let isValid = this.inputValidation();   
        var logStatus = '';         
          axios({
            method: 'post',
            url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
            data: {
                "username": this.state.userName,  //  trupti.kashid@objectedge.com
                "password": this.state.passWord,  //  Objectedge$10
            },
            config: { headers: {
                    "Authorization":"Bearer YWRtaW46YWRtaW4=",
                    'Content-Type': 'application/json'
                }
            }
            })
            .then(response => {
              if(response.status === 200 && isValid){
                  console.log(response);
                logStatus = 'Log In Succesfull !';
                this.setState({loggedInMessage: logStatus})
                this.setState({showComponent : true})
                this.props.loginStatus();
              }
            })
            .catch( error => {
                isValid ? logStatus = 'Log In failed please try again' : logStatus = 'Feilds Required or Space not allowed !'
                this.setState({loggedInMessage: logStatus})
                this.setState({showComponent : true})
            })
        this.setState({showComponent : false})
      }    
    render() {
        return (
            <div className="loginPageContainer">
            {this.state.showComponent ? <Toastmessages msg={this.state.loggedInMessage}/> : null}
                <div className="loginPage">                            
                    <div className="loginForm" >
                        <h1>Log In</h1>
                        <div className="formGroup">
                            <label htmlFor="userEmail" className="blockLevel labels">Email : </label>
                            <input type="text" className="formControl" name="username" ref={(ref) => {this.userName = ref}} onChange={this.handleChange} required/>
                        </div>
                        <div className="formGroup blockLevel">
                            <label htmlFor="password" className="blockLevel labels">Password : </label>
                            <input type="password" className="formControl" name="password" ref={(ref) => {this.passWord = ref}} onChange={this.handleChange}/>                
                        </div>
                        <div className="formGroup blockLevel">
                            <button className="submit" onClick={(e) => {this.onSubmit()}}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="imageContainer"></div>
            </div>
        );
    }
}
export default loginpage;