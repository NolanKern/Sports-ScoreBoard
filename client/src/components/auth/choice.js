import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Choice extends Component {
    handleChoice (){
        this
    }

    render(){
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <button action='submit' className='btn btn-primary' value='host'>Host a Game!</button>
                <button action='submit' className='btn btn-primary' value='join'>Join a Game</button>
            </form>
        );
    }
}