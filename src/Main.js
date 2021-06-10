import React from 'react';
import HornedBeast from './HornedBeast'
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <CardColumns>
          {this.props.data.map(beast => 
            <HornedBeast 
              image_url={beast.image_url} 
              title={beast.title} 
              description={beast.description} 
              keyword={beast.keyword}
              showModal={this.props.showModal}
              index = {this.props.data.indexOf(beast)}
            />)
          }
        </CardColumns>
    );
  }
}

export default Main;