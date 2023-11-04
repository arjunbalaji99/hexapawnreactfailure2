import React from "react";
import { Header, Game, GameInfo } from './containers';

const App = () => {
    return (
        <div className="App">  
           <Header />
           <Game />
           <GameInfo />
        </div>
    )
}

export default App;