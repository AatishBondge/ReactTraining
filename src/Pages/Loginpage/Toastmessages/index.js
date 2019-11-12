import React from 'react';
import './style.css'

const toastmessages = (props) =>{
    return(
        <div className="toast">{props.msg}</div>
    )
}
export default toastmessages;