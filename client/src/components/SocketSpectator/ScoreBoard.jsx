import React, { Component } from 'react';
import ChangeComps from '../SocketComponents/ChangeComps';
import './ScoreBoard';
import { connect } from 'react-redux';
import Timer from '../SocketComponents/Timer'

export default class ScoreBoard extends Component {
   constructor(){
      super();

   }



   render() {
      console.log(this.props);
      return (
         <div>
            <section className="scoreboard">
               <div className="scoreboard-body">
                  <div className="container has-background-grey-darker">
                     <div className="columns is-centered">
                        <div className="column is-half is-narrow">
                           <div className="title is-4 has-text-white has-text-centered">
                              Pecos Field 6
                           </div>
                        </div>

                     </div>
                     <br />
                     <div className="columns is-centered">
                        <div className="column is-one-third">
                           <div id="home-team" className="title is-4 has-text-white has-text-centered has-background-danger">
                              Redskins
                           </div>
                        </div>

                        <div className="column is-one-third">
                           <div id="game-half" className="title is-6 has-text-white has-text-centered">
                              1st Half
                           </div>
                        </div>

                        <div className="column is-one-third">
                           <div id="away-team" className="title is-4 has-text-white has-text-centered has-background-link">
                              Cowboys
                           </div>
                        </div>
                     </div>
                     <div className="columns is-centered">
                        <div className="column is-one-third">
                           <div id="home-score" className="title is-1 has-text-white has-text-centered">
                              {this.props.homeScore}
                           </div>
                        </div>
                        <div className="column is-one-third">
                           <div id="game-time" className="title is-2 has-text-white has-text-centered">
                              <Timer />
                           </div>
                        </div>
                        <div className="column is-one-third">
                           <div id="away-score" className="title is-1 has-text-white has-text-centered">
                              {this.props.awayScore}
                           </div>
                        </div>
                     </div>
                     <div className="columns is-centered">
                        <div className="column is-half is-narrow">
                           <div id="game-down-num" className="title is-4 has-text-warning has-text-centered">
                              3rd & Goal
                           </div>
                        </div>
                     </div>
                        
                  </div>
               </div>
            </section>   

         </div>
      );
    
   }
}