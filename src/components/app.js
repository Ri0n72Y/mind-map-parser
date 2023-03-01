import { useEffect, useState } from 'preact/hooks';

import { notion } from '../api';

import Canvas from './canvas';
import Header from './header';

const App = () => {

	const [key, setKey] = useState('');
	const [id, setId] = useState('');
	const [res, setRes] = useState('');

	useEffect(() => {
		if (key && id) {
			notion.blocks(key, id).then(res => setRes(res));
		}
	}, [setRes, key, id]);
	

	return (<div id="app">
		<Header {...{key, setKey, id, setId}} />
		<main>
			<Canvas {...{res}} />
		</main>
	</div>)
};

export default App;
