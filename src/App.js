import beasts from './resources/data.json';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false,
      currentBeast: beasts[0],
      beastList: beasts,
    };
    console.log(this.state.beastList)
  }

  showModal = (index) => {
    this.setState({
      shouldShowModal: true,
      currentBeast: beasts[index]
    })
    console.log('We are working')
  }

  hideModal = () => {
    this.setState({
      shouldShowModal: false
    })
  }

  filterBeastList = (beastList, selectedValue) => {
  this.setState({
  beastList: beastList.filter( beast => beast.horns === Number(selectedValue))
  })
}

  render() {
    return (
      <>
        <SelectedBeast 
          shouldShowModal={this.state.shouldShowModal}
          currentBeast = {this.state.currentBeast}
          hideModal={this.hideModal}
        />
        <Header title="Horned Beasts and Where to Find Them" />
        <Main 
        showModal={this.showModal} 
        beastList={this.state.beastList}
        filterBeastList={this.filterBeastList} 
        />
        <Footer author="By: Joshua Haddock" />
      </>
    )
  }
}

export default App;

// today we're working with modals
// Add selected beast which feeds into the App.js
// the modal will live within the selected beast.

//Horned beast tells App.js "I am the selected beast"

// this flow is going to be the main nemesis.

//Look up React-Bootstrap-Modal. It sort of like an alert. Shows up over top of the page and everything else goes dark behind it.

//Their example is a functional component. We use class based components, so they're not exactly like what you use, but there are some things which will be applicable.