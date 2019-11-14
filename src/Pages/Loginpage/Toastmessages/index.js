import React from 'react';
import './style.css';

const toastmessages = ({msg}) =>{
    return(
        <div className="toast">{msg}</div>
    );
};
export default toastmessages;