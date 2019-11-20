import React from 'react';
import './Card.scss';

const card = (props) => {
    const { data } = props;
    return (
        <div className='outerCard'>
            <div className="card">
                {data.EProductMedia.smallURI ? <img className='prodImage' alt="{data.description}" src={data.EProductMedia.smallURI} /> : null}
                <div className='nameTag'><p>{data.description}</p></div>
                <p className='partNumber'>PART :{data.composite}</p>
                {data.priceEntry.listPrice ? <p className='priceTag'>${data.priceEntry.listPrice}</p> : null}
                <button className='button'>Add To Quote</button>
            </div>
        </div>
    );
};

export default card;