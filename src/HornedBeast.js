import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

  showModal = () => {
    this.props.showModal(this.props.index);
  }

  render() {
    return(
        <Card>
          <Card.Img onClick={this.showModal} src={this.props.image_url} alt={this.props.title} title={this.props.keyword}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button onClick={this.increaseLikes} variant="primary">Like</Button>
            <span> 💗 {this.state.numberOfLikes} </span>
          </Card.Body>
        </Card>
    );
  }
}

export default HornedBeast;