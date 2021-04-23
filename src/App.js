import './App.css';
import ProductsPage from './ProductsPage';
import ItemPage from './ItemPage';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';

export default function App() {
  const [productsData, setProductsData] = useState([])


  const axiosGet = () => {
    let apiUrl = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products'
    axios.get(apiUrl)
      .then(function (response) {
        // handle success
        setProductsData(response.data)
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(axiosGet, [])
  
  return (
    <div className="App container mt-5">
      <Router>
        <div className="row text-center">
          <div className="col">
            <h1> Peg Leg Pete's Pier of Fishing! </h1>
            <Link to="/"><button type="button" class="btn btn-outline-info">View Cart!</button></Link>
            <Switch>
              <Route exact={true} path="/">
                <ProductsPage productsData={productsData} />
              </Route>
              <Route path="/product/:id">
                <ItemPage productsData={productsData}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}