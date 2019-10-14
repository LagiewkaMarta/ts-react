import React from 'react';
import './App.css';
import { Ex2 } from './2.class-component';
import { Ex3 } from './3.hooks';
// import { Ex1 } from './1.functional-component';

const foo = () => {
	console.log('foo');
};

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
      </>
    );
  }

};

export default App;
