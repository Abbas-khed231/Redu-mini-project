const initialState = {
    Cart_items : [],
    cartLength: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AddToCart":
            let cartItems = state.Cart_items;
            let cartLength = state.cartLength;
            cartItems.push(action.payload);
            cartLength = cartItems.length;
            
            return {...state, Cart_items: cartItems, cartLength };
        
        case "RemoveToCart":
            return{...state, Cart_items: state.Cart_items.find(action.payload)};
    
        default:
            return state;
    }
}

export default cartReducer;