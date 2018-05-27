// requires npm-input-slider
import React from 'react';

class ChangeScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        scoreHome: 0,
        scoreAway: 0
        };
    }
    
    IncreaseScore = (event) => {
        // switch(id from button)
        // cases: Home vs Away
        this.setState({ scoreHome: this.state.clicks + this.props.value });
    }
    
    render() {
        return (
        <div>
            <button onClick={this.IncrementScore} id='Home' value='6'>Home Touchdown</button>
            <button onClick={this.IncrementScore} id='Home' value='1'>From 5-yard line</button>
            <button onClick={this.IncrementScore} id='Home' value='2'>From 10-yard line</button>
            <button onClick={this.IncrementScore} id='Away' value='6'>Away Touchdown</button>
            <button onClick={this.IncrementScore} id='Away' value='1'>From 5-yard line</button>
            <button onClick={this.IncrementScore} id='Away' value='2'>From 10-yard line</button>
        </div>
        );
    }
}