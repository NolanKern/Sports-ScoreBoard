import React, {Component} from 'react';
import Scores from './Scores';
import Timer from './Timer';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ChangeComps extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <Scores {...this.props}/>
            <Timer {...this.props}/>
        </div>
        );
    }
}

// Do I mapStateToProps Here