import React, {Component} from 'react';
import'../Styles/style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { addToCart_Saga, removeFromCart_Saga } from '../store/Cart/cartAction';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products : [
        {
            id : "001",
            title : "Shirt",
            price : "₹550",
            image: "https://m.media-amazon.com/images/I/81ES1HS2EfL._UY879_.jpg"
        },
        {
            id : "002",
            title : "Denim jeans",
            price : "₹1000",
            image : "https://m.media-amazon.com/images/I/91s41FgjYPL._UY550_.jpg"
        },
        {
            id : "003",
            title : "Cargo pant",
            price : "₹900",
            image : "https://m.media-amazon.com/images/I/610crFA7BJL._UY550_.jpg"
        },
        {
            id : "004",
            title : "Hooddie",
            price : "₹600",
            image : "https://m.media-amazon.com/images/I/51ZIqCyzpbL._UX679_.jpg"
        },
        {
            id : "005",
            title : "Laptop",
            price : "₹40000",
            image : "https://m.media-amazon.com/images/I/41s63AvSgcL._SX300_SY300_QL70_FMwebp_.jpg"
        }
    ]
    }
  }
  render() {
    const { products } =this.state;
    const { AddToCart, RemoveFromCart} = this.props
    return (
      <div className="product-list">
      
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => AddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    cart :state.cartReducer.Cart_items
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    AddToCart: addToCart_Saga,
    RemoveFromCart: removeFromCart_Saga

  },dispatch
) 
  


export default connect(mapStateToProps, mapDispatchToProps)(Product);