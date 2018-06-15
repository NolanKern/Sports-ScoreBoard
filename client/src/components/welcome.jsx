import React from 'react';
import { Link } from 'react-router-dom';
import Grass from './animatedGrass'


export default () => 
    
    <div id="welcome-page">
      <br/><br/><br/>
      <div className="columns">
        <div className="column is-half">
          <h1 className="title is-2 has-text-grey">
            Welcome to 
            <span className="has-text-danger"> Score</span>
            <span className="has-text-white">Zone</span>,<br/>
            the flag football live scoreboard app
          </h1>
        </div>
        <div className="column is-half">
          <img src="/assets/scoreboard.png" alt=""/>
        </div>
      </div>
      

      <br/><br/>

      <div className="columns">
        <div className="column is-two-fifths">
        </div>

        <div className="column is-three-fifths">
          <h1 className="title is-2 has-text-grey">
            Never ask anyone for the score again! Simply search for the game ID, and you can now keep track of the whole game at the tips of your fingers
          </h1>
        </div>
      </div>
     

    </div>
;
