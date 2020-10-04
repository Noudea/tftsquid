import React from 'react';
import { getSummonerByName } from '../services/Api'
import Match from './Match'


class AllContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username : undefined,
      puuid : undefined,
      matchList : undefined
    };
  }

    componentDidUpdate()
    {
        console.log(this.state)
    }

handleChange = (event) => 
{
    this.setState({ [event.target.name] : event.target.value })
    console.log (this.state)
}

getData = (event) => 
{
    event.preventDefault()
    console.log('Event Form Submit')
    getSummonerByName(this.state.username)
    .then(response => {
      console.log(response)
      this.setState({
        username : response.name , 
        puuid : response.puuid,
        matchList : response.matchList
      })
      console.log("Etat du state" ,this.state)
    })
}


  render() {
      const { username, matchList, puuid } = this.state
    return (
        <div>
            <form onSubmit={this.getData}>
                <label>Username</label>
                <input name= 'username' value={username} onChange={this.handleChange} type="text"/>
                <button type='submit'>Search</button>
            </form>
            {/* <div>
              {matchList.map((value,index) => 
              {
                return <p>{value}</p>
              })}
            </div> */}
            {
                matchList ?  matchList.map((value) => {return <Match key = {value} puuid = {puuid} matchId = {value} />})  : console.log('pas de match list')
            }
        </div>
    )
  }

  componentDidMount() {
  }
}

export default AllContainer;
