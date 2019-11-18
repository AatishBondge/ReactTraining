import React from 'react';
import './style.scss';

const withSearch = (WrappedComponent) => {
    class WithSearch extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                searchTerm: "",
            };
        }

        handleSearch = event => {
            this.setState({ searchTerm: event.target.value });
        };

        getFilteredProducts = () =>{
          const {searchTerm} = this.state;
          const {products} =  this.props;
          const lowercasedFilter = searchTerm.toLowerCase().trim();
          const filteredData = products.filter(item => {
            return item.description.toLowerCase().includes(lowercasedFilter);
          });
          return filteredData;          
        }
        
        render() {        
            const { searchTerm } = this.state;
            return (
              <div>
                <div>
                  <input
                    onChange={this.handleSearch}
                    value={searchTerm}
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <WrappedComponent products={this.getFilteredProducts()} />
              </div>
            );
          }
    }
    return WithSearch; 
};
 
export default withSearch;