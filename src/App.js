import React from "react";

import { Footer, Header } from './containers';
import { Navbar, Games } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Games />
      <Footer />
    </div>
  );
}

export default App;