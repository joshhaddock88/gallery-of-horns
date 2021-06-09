import React from 'react';
import HornedBeast from './HornedBeast'
import beasts from './resources/data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    let beastList = beasts.map(beast => <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} />)
    return (
        <CardColumns>
          {beastList}
        </CardColumns>
    );
  }
}

export default Main;