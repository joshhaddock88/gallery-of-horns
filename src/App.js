import data from './resources/data.json';
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
      currentBeast: data[0]
    };
  }

  showModal = (index) => {
    this.setState({
      shouldShowModal: true,
      currentBeast: data[index]
    })
    console.log('We are working')
  }

  hideModal = () => {
    this.setState({
      shouldShowModal: false
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
        <Main showModal={this.showModal} data={data} />
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