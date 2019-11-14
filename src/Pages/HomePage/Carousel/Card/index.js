import React from 'react';
import './Card.css';

const card = (props) => {
    const dprops = props;
    return ( 
        <div className='outerCard'>
        <div className="card">
        <img className='prodImage' alt="{props.data.description}" src={dprops.data.EProductMedia.smallURI}/>
        <div className='nameTag'><p>{dprops.data.description}</p></div>
        <p className='partNumber'>PART :{dprops.data.composite}</p>
        <p className='priceTag'>${dprops.data.priceEntry.listPrice}</p>
        <button className='button'>Add To Quote</button>
        </div>
        </div>
     );
};
 
export default card;