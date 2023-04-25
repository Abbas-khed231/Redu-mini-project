import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { cart } = this.props;
    console.log({ cart });
    // const total = this.props.items.reduce((acc, item) => acc + item.price, 0);
    return (
      <div className="cart">
        <h2>Cart</h2>
        {!cart || cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => console.log("remove")}>
                  Remove from Cart
                </button>
              </div>
            ))}
            <p>Total: </p>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({state})
  return { cart: state.cartReducer.Cart_items };
};

export default connect(mapStateToProps)(Cart);
