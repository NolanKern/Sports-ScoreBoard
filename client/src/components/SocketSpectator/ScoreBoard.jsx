import React, {Component} from 'react';
import ChangeComps from '../SocketComponents/ChangeComps';
import './ScoreBoard'

export default class ScoreBoard extends Component {
    render(){
        console.log("Heyoooo")
        return <ChangeComps className='container' />;
    }
}