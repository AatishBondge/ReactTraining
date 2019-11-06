import React from 'react';

const toastmessages = (props) =>{
    console.log(props.msg);
    return(
        <div className="toast">{props.msg}</div>
    )
}
export default toastmessages;