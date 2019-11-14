/* eslint-disable react/button-has-type */
import React from 'react';
import './Carousel.css';
import Card from './Card';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left : 0,
        };
    }

    nextSlide = () => {
        const destructuredState = this.state;
        const destructuredProps = this.props;
        this.prev.removeAttribute("disabled");
        if (destructuredState.left === -(destructuredProps.products.length - 4)*260){
            this.next.setAttribute("disabled", "disabled");            
        }else{
            this.setState({left : destructuredState.left - 260});
        }
    }
    
    prevSlide= () =>{
        const destructuredState = this.state;
        this.next.removeAttribute("disabled");
        this.next.setAttribute("enabled", "enabled");
        if (destructuredState.left === 0){
            this.prev.setAttribute("disabled", "disabled");            
        }else{
            this.setState({left : destructuredState.left + 260});
        }
    }

    render(){
        const destructuredState = this.state;
        const destructuredProps = this.props;
        const style = {
            // eslint-disable-next-line prefer-template
            'left' : destructuredState.left + 'px'
        };

        const AllProducts = destructuredProps.products.map((item, ind) => {            
            // eslint-disable-next-line react/no-array-index-key
            return <Card key={ind} data={item}>{item.description}</Card>;
        });
        
        return(
            // eslint-disable-next-line react/jsx-fragments
            <React.Fragment>
            <button id='prev' className='arrows' onClick={this.prevSlide} ref={(ref) => {this.prev = ref;}}>&#10094;</button>
            <div className='carouselContainer'>
                <div className='prodList' style={style}>{AllProducts}</div>
            </div>
            <button id='next' className='arrows' onClick={this.nextSlide} ref={(ref) => {this.next = ref;}}>&#10095;</button>
            </React.Fragment>
        );
    }
}
export default Carousel;