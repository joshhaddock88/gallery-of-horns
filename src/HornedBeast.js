import React from 'react';

class HornedBeast extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numberOfLikes: 0
    }
  }

  increaseLikes = () => {
    this.setState ({
      numberOfLikes: this.state.numberOfLikes + 1
    });
  }

  render() {
    return(
      <>
        <h2>{this.props.title}</h2>
        <img onClick={this.increaseLikes} src={this.props.image_url} alt={this.props.title} title={this.props.keyword} />
        <p>{this.props.description}</p>
        <span> 💗 {this.state.numberOfLikes} </span>
      </>
    )
  }
}

export default HornedBeast;