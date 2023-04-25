import { Provider } from "react-redux";
import AmazonHeader from "./Header";
import Cart from "./components/Cart";
import Product from "./components/Product";
import store from "./store";

function App() {
  return (
    <div >
      <Provider store={store}>
        <AmazonHeader/>
        <Product/>
        <Cart/>
      </Provider>
    </div>
  );
}

export default App;
