import {LitElement, html, css} from 'lit';


export class NavElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    a:link,
    a:visited,
    a:hover,
    a:active {
    		color: black;
    		text-decoration: none;
    		letter-spacing: .7px;
    	}

    header {
    		height: 10vh;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		padding: 20px;
    		font-size: 20px;
    	}
    header p {
    		font-size: 22px;
	    	letter-spacing: -0.8px;
	    }
    nav {
	    	display: flex;
	    	gap: 15px;
	    	margin-left: 10px;
	    }
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<header>
			<a href="/"><p>helloevan.dev</p></a>
			<nav>
				<a href="/">home</a>
	  		<a href="/about">about</a>
	  	</nav>
	  </header>
		`;
	}
}

customElements.define('nav-element', NavElement);