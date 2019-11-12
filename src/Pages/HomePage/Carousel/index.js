import React from 'react';
import './Carousel.css';
import Card from './Card';


class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            prod : [],
            left : 0,
        }
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }
    nextSlide = () => {
        this.refs.prev.removeAttribute("disabled");
        if (this.state.left === -1560){
            this.refs.next.setAttribute("disabled", "disabled");            
        }else{
            this.setState({left : this.state.left - 260})
        }
        console.log(this.state.left);
    }
    prevSlide(){
        this.refs.next.removeAttribute("disabled");
        this.refs.next.setAttribute("enabled", "enabled");
        if (this.state.left === 0){
            this.refs.prev.setAttribute("disabled", "disabled");            
        }else{
            this.setState({left : this.state.left + 260})
        }
        console.log(this.state.left);

    }

    render(){
        const style = {
            'left' : this.state.left+'px'
        }
        let AllProducts = this.props.products.map((item, ind) => {            
            return <Card key={ind} data={item}>{item.description}</Card>
        })
        
        return(
            <>
            <button id='prev' className='arrows' onClick={this.prevSlide} ref="prev">&#10094;</button>
            <div className='carouselContainer'>
                <div className='prodList' style={style}>{AllProducts}</div>
            </div>
            <button id='next' className='arrows' onClick={this.nextSlide} ref='next'>&#10095;</button>
            </>
        )
    }
}
export default Carousel;