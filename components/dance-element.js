import {LitElement, html, css} from 'lit';
import {TyrionElement} from './tyrion-element.js';


export class DanceElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

		.tyrion {
				border: 1px solid black;
				width: 255px;
				height: 255px;
				margin: 40px;
			}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<main>
			<div class="tyrion">
				<tyrion-element></tyrion-element>
			</div>
		</main>
		`;
	}
}

customElements.define('dance-element', DanceElement);