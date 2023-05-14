import {LitElement, html, css} from 'lit';

export class AboutElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    #flex {
    		display: flex;
    		justify-content: space-evenly;
	    }
    #image {
	    	border: 1px solid black;
	    	width: 160px;
	    }
	  img {
		  	border-radius: 50%;
		  	border: 1px solid black;
		  	width: 100%;
		  	height: 100%;
		  }
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<main>
			<div id="flex">
				<div>This is me.</div>
				<div id="image">
					<img src="../img/bigblue.png" alt="An abstract self-portrait." />
				</div>
			</div>
		</main>
		`;
	}
}

customElements.define('about-element', AboutElement);