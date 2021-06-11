import React from 'react';
import HornedBeast from './HornedBeast'
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  render() {
    return (
        <CardColumns >
          {this.props.beastList.map(beast => 
            <HornedBeast 
              image_url={beast.image_url} 
              title={beast.title} 
              description={beast.description} 
              keyword={beast.keyword}
              showModal={this.props.showModal}
              index = {this.props.beastList.indexOf(beast)}
            />)
          }
        </CardColumns>
    );
  }
}

export default Main;