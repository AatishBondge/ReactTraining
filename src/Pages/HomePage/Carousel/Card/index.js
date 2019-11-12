import React from 'react';
import './Card.css';

class Card extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div className='outerCard'>
            <div className="card">
            <img className='prodImage' alt="{this.props.data.description}" src={this.props.data.EProductMedia.smallURI}></img>
            <div className='nameTag'><p>{this.props.data.description}</p></div>
            <p className='partNumber'>PART :{this.props.data.composite}</p>
            <p className='priceTag'>${this.props.data.priceEntry.listPrice}</p>
            <button className='button'>Add To Quote</button>
            </div>
            </div>
        )
    }
}
export default Card;