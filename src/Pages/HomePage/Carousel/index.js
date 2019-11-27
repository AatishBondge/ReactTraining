import React from 'react';
import { connect } from 'react-redux';
import './Carousel.scss';
import Card from './Card';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
        };
    }

    nextSlide = () => {
        const { left } = this.state;
        const { products } = this.props;
        this.prev.removeAttribute("disabled");
        if (left === -(products.length - 4) * 260) {
            this.next.setAttribute("disabled", "disabled");
        } else {
            this.setState({ left: left - 260 });
        }
    }

    prevSlide = () => {
        const { left } = this.state;
        this.next.removeAttribute("disabled");
        this.next.setAttribute("enabled", "enabled");
        if (left === 0) {
            this.prev.setAttribute("disabled", "disabled");
        } else {
            this.setState({ left: left + 260 });
        }
    }

    render() {
        const { left } = this.state;
        const { products } = this.props;
        const style = {
            'left': left + 'px'
        };

        const AllProducts = products.map((item, ind) => {
            const key = ind;
            return <Card key={key} data={item}>{item.description}</Card>;
        });

        return (
            <>
                <button id='prev' className='arrows' onClick={this.prevSlide} ref={(ref) => { this.prev = ref; }}>&#10094;</button>
                <div className='carouselContainer'>
                    <div className='prodList' style={style}>{AllProducts}</div>
                </div>
                <button id='next' className='arrows' onClick={this.nextSlide} ref={(ref) => { this.next = ref; }}>&#10095;</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps)(Carousel);