import React from 'react';
import {getMatch, getName} from '../services/Api'
import Username from '../componants/Username'
import Info from './Info'


class Match extends React.Component {
  constructor() {
    super();
    this.state = {
        matchData : undefined,
        userPuuid : undefined,
        participants : undefined,
        userInfo : undefined,
    };
  }

    componentDidMount() {
        setTimeout(() => {
            getMatch(this.props.matchId)
                .then((result) => {
                    this.setState({ matchData: result })
                })
                .then(() => {
                    this.comparePuuid(this.state.matchData.info.participants)
                })
                .then(() => {
                    console.log(this.state)
                })
        }, 500*this.props.timer);
        
    }

    comparePuuid = () => {
        this.state.participants= []
        for (let index = 0; index < this.state.matchData.info.participants.length; index++) {

            if (this.props.puuid === this.state.matchData.info.participants[index].puuid) 
            {   
                this.setState({ userInfo : this.state.matchData.info.participants[index]})
            } else 
                {
                    this.setState(prevState => ({
                        participants: [...prevState.participants, this.state.matchData.info.participants[index].puuid ]
                    }))
                }
            
        }
    }


  render() {
      const { userPuuid, participants, userInfo} = this.state
    return (
        <div className = "matchContainer">
                { userInfo ? <Info key = {userPuuid} data = {userInfo}/> : false}
            <div className = "participantsContainer">
                {userInfo ? <Username class= 'currentUser' puuid={userInfo.puuid} /> : console.log('loadpasasasasa')}
                {
                    participants ? participants.map((value) => { return <Username class='username' puuid={value} /> }) : false
                }

            </div>
            
        </div>
    )
  }


}

export default Match;
