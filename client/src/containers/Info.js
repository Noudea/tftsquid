import React from 'react';
import ChampionComponant from '../componants/ChampionComponant'
import TraitsComponant from '../componants/TraitsComponant'
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
        const { placement, units, traits} = this.props.data
        return (
            <div className = 'info'>
                <p>{placement}</p>
                {units ? units.map((value) => {return <ChampionComponant data = {value}/>}): false}
                <div className='traitsContainer' >
                    {traits ? traits.map((value) => { return <TraitsComponant data={value} /> }) : false}
                </div>
                
            </div>
        )
    }
}

export default Info;
