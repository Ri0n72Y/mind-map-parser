import style from './style.css';

/**
 * 
 * @param {{refresh: function, apply: function}}
 */
const Header = ({
	refresh, apply
}) => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Mind Map Parser</h1>
		</a>
		<button class={style.symbol} onClick={refresh} >↺</button>
		<button class={style.symbol} onClick={apply} >↩</button>
	</header>
);

export default Header;
