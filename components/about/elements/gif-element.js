import {LitElement, html, css} from 'lit';

export class GifElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    .squares {
    		background-image: url(../img/huh-confused.gif);
    		background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
    		display: flex;
    		flex-wrap: wrap;
    		align-content: center;
    		justify-content: center;
    		gap: 0.5px;
	    	width: 100%;
	    	height: 100%;
	    }
	  .square {
	  		border: 1px solid black;
	  		background-color: #fff;
		  	width: 35px;
		  	height: 35px;
				transition: 0.2s;
		  }
		.square:hover {
				background-color: yellow;
				transform: scale(1.2);
			}
		.fade-away {
				animation-name: fade-away;
				animation-duration: 2s;
				animation-fill-mode: forwards;
				animation-timing-function: linear;
				opacity: 1;
			}
		@keyframes fade-away {
				to {
					opacity: 0;
					transform: rotateZ(1440deg) scale(2);
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
		square.forEach((square) => square.classList.add('fade-away'));
	}

	render() {
		return html`
		<button @click=${this.handleClick}>Watch A Preview Of Me, Programming</button>
		${this.squares()}
		`;
	}
}

customElements.define('gif-element', GifElement);