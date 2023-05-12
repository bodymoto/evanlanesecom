import {LitElement, html, css} from 'lit';

export class AboutElement extends LitElement {
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
    		text-transform: uppercase;
    	}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		ABOUT
		`;
	}
}

customElements.define('about-element', AboutElement);