import React from 'react';
import HornedBeast from './HornedBest'

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title="Water Buffalo" imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/51/Indian_Water_Buffalo_Bubalus_arnee_by_Dr_Raju_Kasambe_IMG_0347_%2811%29_%28cropped%29.jpg" description="This is a water buffalo. They don't actually live in the water. They live on the ground. So... I don't know why they're called water buffalo. It seems like a misnomer..." />
        <HornedBeast title="Rhino" imageUrl="https://animals.sandiegozoo.org/sites/default/files/2021-03/animals_hero_white_rhino_0.png" description="This is a rhino! He was not consulted when the named the medical procedure 'rhinoplasty' after him. I'm sure he would be offended." />
      </>
    )
  }
}

export default Main;