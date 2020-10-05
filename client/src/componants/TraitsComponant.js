import React from 'react';
import Traits from '../ressources/set4/traits.json'

class TraitsComponant extends React.Component {
  constructor(props) {
    super();
    this.state = {
      trait : props.data,
      isLoaded : false,
      jsontraits : undefined,
    };
  }


    componentDidMount() {
    this.traitsPlayed()
    .then(this.traitStyle())
    .then(this.setState({isLoaded : true}))
    console.log(this.state)
    console.log(this.state.trait.name)
    }

    // componentWillMount()
    // {
    //     this.traitsPlayed()
    //     console.log(this.state)
    //     console.log(this.state.trait.name)
    // }
    

    traitsPlayed = () => {
        return new Promise((resolve,reject)=>
        {
            const champ = Traits.find(search => search.key === this.state.trait.name)
            const newState = Object.assign({}, this.state);
            newState.trait.name = champ.name
            resolve(this.setState(newState))
        })
    }

    traitStyle = () => 
    {   
        return new Promise((resolve,reject) =>
        {
            const champ = Traits.find(search => search.name === this.state.trait.name)
            const newState = Object.assign({}, this.state);
            console.log('newstyle1', champ)
            newState.trait.styleColor = champ.sets[this.state.trait.style-1].style
            console.log('newstyle', newState)
            resolve(this.setState(newState))
        })
        .catch(error => console.log('erreur trait syle' , error))
    }

  render() {
    const {isLoaded,trait} = this.state
    //   const tableImage = require('../ressources/set4/traits/' + this.state.trait.name+'.png')
      console.log(this.state.trait)
    return (
        <div>
            {/* { isLoaded ? <img src={require('../ressources/set4/traits/' + encodeURI(this.state.trait.name.toLowerCase() + '.svg'))}></img> : <p>chargement</p>} */}
            {isLoaded ? trait.style > 0 ? <div className={trait.styleColor}><img src={require('../ressources/set4/traits/' + this.state.trait.name.toLowerCase().replace(/ /g, "") + '.svg')}></img></div>:false : <p>chargemert</p>}
        </div>
        
        
    )
  }

}

export default TraitsComponant;
