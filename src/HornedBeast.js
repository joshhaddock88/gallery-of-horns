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

  render() {
    return(
        <Card style={{ width: '18em'}}>
          <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.keyword} style={{width: '18em'}}/>
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