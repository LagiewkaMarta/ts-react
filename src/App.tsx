import React from 'react';
import './App.css';
import { Ex2 } from './2.class-component';
import { Ex3 } from './3.hooks';
// import { Ex1 } from './1.functional-component';
import { foo } from "./Observ/index"

foo();

class App extends React.Component {
  state = {
    value: ""
  }

  // onChane events 
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return (
      <>
        {/* <Ex1 fn={foo} name="hh" ok={false}></Ex1> */}
        {/* <Ex2 num={9}></Ex2> */}
        <Ex3 onInputChange={this.onInputChange} value={this.state.value}/>
        <p style={{fontFamily: "Metropolis", fontWeight: "bold"}}>yutytgyjyjtjytgjhghg ghjghjghyt</p>
      </>
    );
  }

};

export default App;
