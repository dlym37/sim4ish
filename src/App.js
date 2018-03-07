import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <body >
        <header>

          <div></div>
          <h1>Trivia Trends</h1>
          <button><span>+</span> Add Question</button>
        </header>

        <article>
          <nav>
            <a>All Questions</a>
            <a>Easy</a>
            <a>Medium</a>
            <a>Hard</a>
            <a>Search by Animal</a>
          </nav>
          <div className="search">
            <input type="text" placeholder="Animal to search by" />
          </div>



          <div id='whatevs'>This section is for James {/*Core 54C, 54J*/}
            <div className='green'></div>
            <div className='yellow'></div>
            <div className='red'></div>
            <video width='320' height='240' controls>
              <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
            </video> {/* Sim 4.5 56C */}
            <audio controls> {/* Sim 4.5 56D */}
              <source src="https://www.pastemagazine.com/player?url=https://radio.pastemagazine.com/audio/320/49117303.mp3&title=Aerosmith+-+Dream+On&href=/articles/2015/06/aerosmith-dream-on234.html&type=mp3&autoplay=true&next=/articles/2015/06/aerosmith-sick-as-a-dog.html#" type="audio/ogg" />
            </audio>
          </div>




        </article>

        <div className="modal">
          <form>
            <h4 className="close">X</h4>
            <span>Question</span>
            <input type="text" /> {/*Core 54G*/}
            <span>Animal it's about</span>
            <input type="text" />
            <span>Difficulty</span>
            <div className="range">
              <input type="range" min="1" max="3" />
              <h5></h5>
            </div>
            <h4>Options</h4>
            <div>
              <input type="radio" value="1" />
              <input type="text" />
            </div>
            <div>
              <input type="radio" value="2" />
              <input type="text" />
            </div>
            <div>
              <input type="radio" value="3" />
              <input type="text" />
            </div>
            <div>
              <input type="radio" value="4" />
              <input type="text" />
            </div>


            <div className="buttons">
              <button className="green">Save Question</button>
              <button>Cancel</button>
            </div>


            <div className="buttons">
              <button className="red">Delete Question</button>
              <button className="green">Save Changes</button>
              <button>Cancel</button>
            </div>

          </form>
        </div>
      </body>
    );
  }
}



