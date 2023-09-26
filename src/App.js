import React from 'react';
import './App.css';
import Nav from "./components/nav"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;