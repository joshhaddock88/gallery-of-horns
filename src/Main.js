import React from 'react';
import HornedBeast from './HornedBeast'
import RhinoPic from './Images/rhino.jpg';
import WaterBuffaloPic from './Images/waterBuffalo.jpg';
import beasts from './resources/data.json'

class Main extends React.Component {
  render() {
    let beastList = beasts.map(beast => <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} />)
    return (
      <>
        {beastList}
      </>
    )
  }
}

export default Main;