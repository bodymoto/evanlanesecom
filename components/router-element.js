import {LitElement, html, css} from 'lit';
import {NavElement} from './nav-element.js';

export class RouterElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<nav-element></nav-element>

	 	<slot></slot>
		`;
	}
}

customElements.define('router-element', RouterElement);