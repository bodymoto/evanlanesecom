import {LitElement, html, css} from 'lit';

export class ImgElement extends LitElement {
	static styles = css`
	  img {
		  	border-radius: 50%;
		  	width: 100%;
		  	height: 100%;
		  }
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<img src="../img/bigblue.webp" alt="An abstract self-portrait." />
		`;
	}
}

customElements.define('img-element', ImgElement);