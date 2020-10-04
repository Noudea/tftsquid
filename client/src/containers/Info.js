import React from 'react';
import ChampionComponant from '../componants/ChampionComponant'

class Info extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
    componentDidMount() {
       console.log(this.props.data)
    }


    render() {
        const { placement, units } = this.props.data
        return (
            <div className = 'info'>
                <p>{placement}</p>
                {units ? units.map((value) => {return <ChampionComponant data = {value}/>}): false}
            </div>
        )
    }
}

export default Info;
