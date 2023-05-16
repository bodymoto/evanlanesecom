import {LitElement, html, css} from 'lit';
import {TypingElement} from './typing-element.js';
import {TyrionElement} from './tyrion-element.js';


export class AboutElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    #heading {
    		display: flex;
    		justify-content: space-evenly;
	    }
	  #intro {
	  		border: 1px solid black;
	  		width: 150px;
		  }
    #image {
	    	border: 1px solid black;
	    	width: 160px;
	    }
	  #image img {
		  	border: 1px solid black;
		  	border-radius: 50%;
		  	width: 100%;
		  	height: 100%;
		  }

		.tyrion {
				border: 1px solid black;
				width: 255px;
				height: 255px;
				margin: 60px;
				position: absolute;
				bottom: 0;
			}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<main>
			<div id="heading">
				<div id="intro">
					<typing-element></typing-element>
					<p></p>
				</div>

				<div id="image">
					<img src="../img/bigblue.png" alt="An abstract self-portrait." />
				</div>
			</div>

			<div class="tyrion">
				<tyrion-element></tyrion-element>
			</div>
		</main>
		`;
	}
}

customElements.define('about-element', AboutElement);