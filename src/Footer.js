import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <footer>{this.props.author}</footer>
    )
  }
}

export default Footer;