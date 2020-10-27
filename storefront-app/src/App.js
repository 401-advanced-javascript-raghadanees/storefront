// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/categories.js';
import Products from './components/products.js';

class App extends React.Component {
  render() {

      return (
          <>
              <Header />
              <Categories />
              <Products />
              <Footer />
          </>
      )
  }
}

export default App;
