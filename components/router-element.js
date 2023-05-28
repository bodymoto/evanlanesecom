import {LitElement, html, css} from 'lit';
import {HeaderElement} from './header-element.js';


export class RouterElement extends LitElement {
	constructor() {
		super();
	}

	render() {
		return html`
		<header-element></header-element>
	 	<slot></slot>
		`;
	}
}

customElements.define('router-element', RouterElement);