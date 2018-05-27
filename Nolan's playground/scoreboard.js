const TEAMS = [
    {
      name: "Home",
      score: 0,
      id: 1
    },
    {
      name: "Away",
      score: 0,
      id: 2
    }
  ]
  
  // Es6 Stateless component
  const Stats = (props) => {
    const totalTeams = props.teams.length
    
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Teams:</td>
            <td>{totalTeams}</td>
          </tr>
        </tbody>
      </table>
    )
  }
  // Define proptypes fpr a stateless component
  Stats.propTypes = {
    teams: React.PropTypes.array.isRequired
  };
  
  // Es6 Stateless component
  const Header = (props) => (
    <div className="header">
      <Stats teams={props.teams}/>
      <h1>{props.title}</h1>
    </div>
  )
  // Define proptypes fpr a stateless component
  Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    teams: React.PropTypes.array.isRequired
  };
  
  // Es6 Stateless component
  const Counter = (props) => (
    <div className="counter">
                  <button onClick={function() {props.onChange(6)}}>Home Touchdown</button>
              <button onClick={function() {props.onChange(1)}}>From 5-yard line</button>
              <button onClick={function() {props.onChange(2)}}>From 10-yard line</button>
      <div className="counter-score"> {props.score} </div>
    </div>
  )
  // Define proptypes fpr a stateless component
  Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  }
  
  // Es6 Stateless component
  const Team = (props) => (
    <div className="team">
      <div className="team-name">
        {props.name}
      </div>
      <div className="team-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  )
  // Define proptypes fpr a stateless component
  Teams.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
  };
  
  class Application extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial state
      this.state = { teams: this.props.initialTeams }
      // Bind custom methods
      this._onScoreChange = this._onScoreChange.bind(this)
      this._onTeamAdd = this._onTeamAdd.bind(this)
    }
    
    _onScoreChange (index, delta) {
      this.state.Teams[index].score += delta
      this.setState(this.state)
    }
      
    _onTeamAdd (name) {
      this.state.teams.push({
        name: name,
        score: 0,
        id: nextId
      });
      this.setState(this.state)
      nextId += 1
    }
    
    render () {
      return (
        <div className="scoreboard">
          <Header title={this.props.title} teams={this.state.teams} />
        
          <div className="teams">
            {this.state.teams.map((team, index) =>
              <Team 
                onScoreChange={(delta) => this._onScoreChange(index, delta)}
                name={team.name} 
                score={team.score} 
                key={team.id} />
            )}
          </div>
        </div>
      );
    }
  }
  
  Application.propTypes = {
    title: React.PropTypes.string,
    initialTeams: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  }
  
  Application.defaultProps = {
    title: "Flag Football"
  }
  
  // Load the app into the DOM
  ReactDOM.render(
    <Application initialTeams={TEAMS} />,
    document.getElementById('App')
  )