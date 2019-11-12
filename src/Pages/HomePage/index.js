import React from 'react';
import './style.css';
import axios from 'axios'
import Carousel from './Carousel'

export class homePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            products : [],
        }
    }
    componentDidMount(){
        axios({
            method: 'POST',
            url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search?query=%7B%22query%22%3A%22bike%22%2C%22offset%22%3A0%2C%22limit%22%3A20%2C%22sort%22%3A%22new+asc%22%2C%22filter%22%3A%5B%22categories%3ArootCategory%2Fb_equipment%2Fb_cycling-accessories%22%2C%22siteId%3AsiteUS%22%2C%22catalog%3Abepsy_catalog_1%22%2C%22dyn_price_defaultPriceGroup%3A%5B0+TO+*%5D%22%2C%22%7B%21collapse+field%3DproductId%7D%22%5D%2C%22facet%22%3A%7B%22categories%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22categories%22%2C%22prefix%22%3A%22rootCategory%2Fb_equipment%2Fb_cycling-accessories%22%2C%22limit%22%3A100%7D%2C%22dyn_price_defaultPriceGroup%22%3A%7B%22type%22%3A%22range%22%2C%22field%22%3A%22dyn_price_defaultPriceGroup%22%2C%22domain%22%3A%7B%22excludeTags%22%3A%22PRICE%22%7D%2C%22start%22%3A0%2C%22end%22%3A7000%2C%22gap%22%3A1000%7D%2C%22type%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22type%22%2C%22limit%22%3A100%7D%2C%22brand%22%3A%7B%22type%22%3A%22terms%22%2C%22field%22%3A%22brand%22%2C%22limit%22%3A100%7D%7D%7D',
            config: { headers: {
                'Bepsy-CatalogId': 'bepsy_catalog_1',
                'Bepsy-PricelistId': 'defaultPriceGroup',
                'Bepsy-SiteId': 'siteUS'
                
                }
            }
            })
            .then(response => {
                let data = response.data.response.records.map((elem, ind) => {
                 let sku = elem.compositeProducts[0]
                    return sku;
                })
                this.setState({products : data})
              })
              .catch( error => {
                console.log(error);
              })        
    }

    render(){
        return(
            <div className="homePage">
            <h1>HomePage</h1>
            <Carousel products={this.state.products}/>
            </div>
        )
    }
}

export default homePage;