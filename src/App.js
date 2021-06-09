import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Header title="Horned Beasts and Where to Find Them" />
        <Main />
        <Footer author="By: Joshua Haddock" />
      </>
    )
  }
}

export default App;