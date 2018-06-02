import React, { Component } from 'react';

export default class Scores extends Component {
    constructor(){
        super();
        this.homeScore = 0;
        this.awayScore = 0;
        this.incrementHome = this.incrementHome.bind(this);
        this.incrementAway = this.incrementAway.bind(this);
    }

    incrementHome(value){
        this.setState({
            homeScore: (homeScore + value)
        });
    };

    incrementHome(value){
        this.setState({
            awayScore: (awayScore + value)
        });
    };

    render(){
        return (
            <div className='container'>
                {/* Start of the logic for the Home Drop Down menu */}
                <div class="dropdown is-active">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Home Scores!</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item" value='6' onSubmit={this.incrementHome}>
                                Touchdown (+6)
                            </a>
                            <a class="dropdown-item" value='1' onSubmit={this.incrementHome}>
                                Thirty-yard Line (+1)
                            </a>
                        </div>
                    </div>
                </div>
                {/* Start of the logic for the Away Drop Down menu */}
                <div class="dropdown is-active">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Away Scores!</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item" value='6' onSubmit={this.incrementAway}>
                                Touchdown (+6)
                            </a>
                            <a class="dropdown-item" value='1' onSubmit={this.incrementAway}>
                                Thirty-yard Line (+1)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}