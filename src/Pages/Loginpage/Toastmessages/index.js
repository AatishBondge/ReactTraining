import React from 'react';
import './style.scss';

const toastmessages = ({ msg }) => {
    return (
        <div className="toast">{msg}</div>
    );
};
export default toastmessages;