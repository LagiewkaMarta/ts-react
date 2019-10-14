import React from 'react';
import './App.css';
import { Ex1 } from './1.functional-component';

const foo = () => {
	console.log('foo');
};

const App: React.FC = () => {
	return (
		<>
			<Ex1 fn={foo} name="hh" ok={false}></Ex1>
		</>
	);
};

export default App;
