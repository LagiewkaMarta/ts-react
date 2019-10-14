import React from 'react';
import './App.css';
import { Ex2 } from './2.class-component';
// import { Ex1 } from './1.functional-component';

const foo = () => {
	console.log('foo');
};

const App: React.FC = () => {
	return (
		<>
			{/* <Ex1 fn={foo} name="hh" ok={false}></Ex1> */}
			<Ex2 num={9}></Ex2>
		</>
	);
};

export default App;
