import style from './style.css';

/**
 * 
 * @param {{url: string, setUrl: StateUpdater<string>}}
 */
const Header = ({
	url, done
}) => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Mind Map Parser</h1>
		</a>
		<input class={style.url} 
			placeholder={'Paste url here...'}
			value={url}
			onChange={(e) => done(e.target.value)}
			/>
	</header>
);

export default Header;
