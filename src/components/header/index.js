import style from './style.css';

/**
 * 
 * @param {{refresh: function, apply: function}}
 */
const Header = ({
	key, setKey, id, setId
}) => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Mind Map Parser</h1>
		</a>
		<input placeholder='Key' value={key} onChange={e => setKey(e.target.value)} />
		<input placeholder='Id' value={id} onChange={e => setId(e.target.value)} />
	</header>
);

export default Header;
