import React from 'react';
import { getSummonerByName } from '../services/Api'

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
    const {username} = this.state
    return (
        <div>
            <form onSubmit={this.getData}>
                <label>Username</label>
                <input name= 'username' value={username} onChange={this.handleChange} type="text"/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
  }

  componentDidMount() {
  }
}

export default AllContainer;
