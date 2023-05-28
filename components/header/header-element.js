import {LitElement, html, css} from 'lit';

export class HeaderElement extends LitElement {
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
    		font-size: 20px;
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		height: 85px;
    		padding: 20px;
    	}
    nav {
	    	display: flex;
	    	gap: 30px;
	    }


	  @media screen and (min-width: 728px) {
	  	nav {
		    	padding: 0 60px;
		    }
	  }
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<header>
			<a href="/">
				<img width="102" height="52" src="../img/helloevandev.webp" alt="site logo"/>
			</a>
			<nav>
				<a href="/">home</a>
	  		<a href="/about">about</a>
	  	</nav>
	  </header>
		`;
	}
}

customElements.define('header-element', HeaderElement);