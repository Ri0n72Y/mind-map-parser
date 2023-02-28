import { useState } from 'preact/hooks';

import Canvas from './canvas';
import Header from './header';

// Code-splitting is automated for `routes` directory

const App = () => {
	const [url, setUrl] = useState('');

	return (<div id="app">
		<Header {...{url, done: setUrl}} />
		<main>
			<Canvas {...{url}} />
		</main>
	</div>)
};

export default App;
