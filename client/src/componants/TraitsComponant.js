import React from 'react';
import Traits from '../ressources/set4/traits.json'

class TraitsComponant extends React.Component {
  constructor(props) {
    super();
    this.state = {
      trait : props.data
    };
  }


    componentDidMount() {
    this.traitsPlayed()
    console.log(this.state)
    }


    traitsPlayed = () => {
        const champ = Traits.find(search => search.key === this.state.trait.name)
        const newState = Object.assign({}, this.state);
        newState.trait.name = champ.name
        this.setState(newState);

    }



  render() {

    //   const tableImage = require('../ressources/set4/traits/adept.png')
    return (
        <div>
            {/* <img src= {tableImage}></img> */}
        </div>
        // <p>{tableImage}</p>
    )
  }

}

export default TraitsComponant;
