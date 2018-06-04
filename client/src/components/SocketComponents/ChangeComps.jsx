import React, {Component} from 'react';
import Scores from './Scores';
import Timer from './Timer';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ChangeComps extends Component {
    render(){
        return(
        <div>
            <Scores />
            <Timer />
        </div>
        );
    }
}

// Do I mapStateToProps Here