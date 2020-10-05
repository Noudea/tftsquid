import React from 'react';
import {getName} from '../services/Api'



class Username extends React.Component {
  constructor() {
    super();
    this.state = {
      username : undefined,
    };
  }
    componentDidMount() {
        console.log(this.props.puuid)
        getName(this.props.puuid)
        .then((result) =>
        {
            console.log(result)
            this.setState({ username :  result.name })
        })
        .then (()=>
        {
            console.log('username state' , this.state)
        })
    }

  render() {
      const { username } = this.state
    return (
            <p className={this.props.class}>{username}</p>
    )
  }


}

export default Username;
