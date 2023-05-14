import {LitElement, html, css} from 'lit';


export class TyrionElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    .squares {
    		display: flex;
    		flex-wrap: wrap;
    		align-content: center;
    		justify-content: center;
    		background-image: url(../img/got-dance.gif);
    		gap: 0.5px;
	    	width: 100%;
	    	height: 100%;
	    }
	  .square {
	  		border: 1px solid black;
	  		background-color: darkorange;
		  	width: 35px;
		  	height: 35px;
				transition: 0.2s;
		  }
		.square:hover {
				transform: scale(1.2);
				background-color: yellow;
			}
		.fade {
				animation-name: fade;
				animation-duration: 7s;
				animation-fill-mode: forwards;
				opacity: 1;
			}
		@keyframes fade {
				to {
					opacity: 0;
					transform: rotateZ(1060deg);
				}
			}
		button {
				cursor: pointer;
				font-size: 18px;
				appearance: none;
				border: 1px solid black;
				background-color: #fff;
				padding: 10px;
				margin: 10px;
			}
	`;

	constructor() {
		super();
	}

	squares(count = 49) {
		const squares = document.createElement('div');
		squares.classList.add('squares');

		for (let i = 0; i < count; i++) {
			const square = document.createElement('div');
			square.classList.add('square');
			squares.appendChild(square);
		}
		return squares;
	}

	handleClick() {
		const squares = this.shadowRoot.querySelector('.squares');
		const square = squares.querySelectorAll('.square');
		square.forEach((square) => square.classList.add('fade'));
	}

	render() {
		return html`
		${this.squares()}
		<button @click=${this.handleClick}>dance with tyrion lannister</button>
		`;
	}
}

customElements.define('tyrion-element', TyrionElement);