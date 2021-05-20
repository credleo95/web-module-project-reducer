import React, { useReducer } from 'react';
import {addOne, ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SET_MEMORY, ADD_MEMORY, MEMORY_RESET} from './actions/index'; 
import './App.css';
import reducer, { initialState } from './reducers/index';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

const numberClick = (n) => {
  dispatch({type:APPLY_NUMBER, payload:n})
} 

const operatorChange = (operator) => {
  dispatch({type:CHANGE_OPERATION, payload:operator})
}

const clearScreen = () => {
  dispatch({type:CLEAR_DISPLAY})
}
const setMemory = () => {
  dispatch({type:SET_MEMORY})
}

const addMemory = () => {
  dispatch({type:ADD_MEMORY})
}

const resetMemory = () => {
  dispatch({type:MEMORY_RESET})
}
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={setMemory}/>
              <CalcButton value={"MR"} onClick={addMemory}/>
              <CalcButton value={"MC"} onClick={resetMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={numberClick}/>
              <CalcButton value={2} onClick={numberClick}/>
              <CalcButton value={3} onClick={numberClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={numberClick}/>
              <CalcButton value={5} onClick={numberClick}/>
              <CalcButton value={6} onClick={numberClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={numberClick}/>
              <CalcButton value={8} onClick={numberClick}/>
              <CalcButton value={9} onClick={numberClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operatorChange}/>
              <CalcButton value={"*"} onClick={operatorChange}/>
              <CalcButton value={"-"} onClick={operatorChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearScreen}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
