import { useEffect, useState } from 'preact/hooks';

import Canvas from './canvas';
import Header from './header';

const App = () => {
	const [auth, setAuth] = useState('');
	const [root, setRoot] = useState('');
	useEffect(() => {
		const url = new URL(window.location.href);
		setAuth(url.searchParams.get('auth'));
		setRoot(url.searchParams.get('root'));
	}, [setAuth, setRoot])

	const refresh = () => {};
	const apply = () => {};

	return (<div id="app">
		<Header {...{refresh, apply}} />
		<main>
			<Canvas {...{root}} />
		</main>
	</div>)
};

export default App;
