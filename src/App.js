import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import SuccessPage from './pages/SuccessPageScreen'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={ProductScreen} />
      <Route path="/success-page" component={SuccessPage} />
      <Route path="/view-cart" component={CartScreen} />
    </BrowserRouter>
  );
}

export default App;
