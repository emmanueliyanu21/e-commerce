import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import SuccessPage from './pages/SuccessPageScreen'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/success-page" component={SuccessPage} />
      <Route path="/cart/:id?" component={CartScreen} />
    </Router>
  );
}

export default App;
