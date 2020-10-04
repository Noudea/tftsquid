import React from 'react';
import Champions from '../ressources/set4/champions.json'

class ChampionComponant extends React.Component {
  constructor(props) {
    super();
    this.state = {
      champ : props.data,
    };
  }



    componentDidMount() {
        this.championPlayed()
        console.log('state champion', this.state)
    }


    championPlayed = () => {
            const champ = Champions.find(search => search.championId === this.state.champ.character_id)
            // this.state.champ.name = champ.name
            // this.setState({champ : Object.assign(this.state.champ.name, champ.name)})
        const newState = Object.assign({}, this.state);
        newState.champ.name = champ.name
        this.setState(newState);

        const newState2 = Object.assign({}, this.state);
        newState2.champ.cost = champ.cost
        this.setState(newState2);
    }


  render() {
      
      const tableImage = require('../ressources/set4/champions/' +this.state.champ.character_id + '.png')
    return(
        <div className = 'Champions'>
            <img src={tableImage} alt="" />
        </div>
    )
  }

}

export default ChampionComponant;
