import React ,{Component} from 'react';
import './loginpage.css';

export class loginpage extends Component{
    constructor(props){
        super(props)  
        this.onSubmit = this.props.isLogin.bind(this)
        
        // this.handleChange = this.handleChange.bind(this)
    }
    // handleChange(e){
    //     this.setState({ userName: this.refs.userName.value });
    //     this.setState({ passWord : this.refs.passWord.value });
    //     console.log(this.userName.value);
    //     console.log(this.passWord.value);
    // }
    render() {
        return (
            <div className="loginPage">            
                <div className="loginForm" >
                    <h1>Log In</h1>
                    <div className="formGroup">
                        <label htmlFor="userEmail" className="blockLevel labels">Email : </label>
                        <input type="text" className="formControl" name="username" ref={(ref) => {this.userName = ref}} required/>
                    </div>
                    <div className="formGroup blockLevel">
                        <label htmlFor="password" className="blockLevel labels">Password : </label>
                        <input type="password" className="formControl" name="password" ref={(ref) => {this.passWord = ref}} />                
                    </div>
                    <div className="formGroup blockLevel">
                        <button className="submit" onClick={(e) => {this.onSubmit(this.userName.value, this.passWord.value)}}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default loginpage;