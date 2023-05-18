import {LitElement, html, css} from 'lit';

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

	handleClick() {
		const input = this.shadowRoot.querySelector('input');
		const empty = this.shadowRoot.querySelector('#add-here');

		//reset
		input.value = "";
	}

	render() {
		return html`
		<main>
			<div id="heading">
				<div id="intro">
					<p>i invented B.I. or believable intelligence. its 100% secure & the best part is B.I. is located right on this device. Go ahead, ask B.I. anything!</p>
					<p>...</p>
					<p>B.I. is typing...</p>
				</div>

				<div id="image">
					<img src="../img/bigblue.png" alt="An abstract self-portrait." />
				</div>
			</div>
			<input type="text" maxlength="50" size="50"/>
			<button @click=${this.handleClick} type="submit">ask question</button>
			<div id="add-here">add elements here</div>
			<p>B.I. runs locally meaning your device is hard at work processing a huge amount of bytes. Something like one thousand or even one million bytes! Its worth the wait. Any day now...</p>

		</main>
		`;
			// <div class="tyrion">
			// 	<tyrion-element></tyrion-element>
			// </div>
	}
}

customElements.define('about-element', AboutElement);