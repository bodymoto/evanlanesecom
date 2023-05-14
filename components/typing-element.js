import {LitElement, html, css} from 'lit';


export class TypingElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    #main {
	    	display: flex;
	    }

	  #cursor {
		  	width: 11px;
		  	height: 18px;
		  	border: 1px solid black;
		  }

		.blink {
				border-right: 2px solid black;
				height: 16px;
				padding-left: 5px;
				margin-top: 6px;
				animation-name: blink;
				animation-duration: 1s;
				animation-fill-mode: forwards;
				animation-iteration-count: 1;
			}
		@keyframes blink {
				from {
					border-right: 2px solid black;
				}
				90% {
					border-right: 2px solid black;
				}
				to {
					border-right: none;
				}
			}
		#text {
				display: flex;
				padding: 5px;
				margin-left: -4px;
			}
	  span {
				visibility: hidden;
				animation-name: typing, border;
				animation-duration: 1s, 0.3s;
				animation-fill-mode: forwards, forwards;
				border-right: 2px solid black;
		  }
		span:nth-child(1) {
				animation-delay: 1s;
			}
		span:nth-child(2) {
				animation-delay: 1.1s;
			}
		span:nth-child(3) {
				animation-delay: 1.2s;
			}
		span:nth-child(4) {
				animation-delay: 1.3s;
			}
		span:nth-child(5) {
				width: 5px;
				animation-delay: 1.4s;
			}
		span:nth-child(6) {
				animation-delay: 1.5s;
			}
		span:nth-child(7) {
				animation-delay: 1.6s;
			}
		span:nth-child(8) {
				animation-delay: 1.7s;
			}
		span:nth-child(9) {
				animation-delay: 1.8s;
			}

		@keyframes typing {
				to {
					visibility: visible;
				}
			}
		@keyframes border {
				to {
					border: none;
				}
			}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<div id="main">
			<div class="blink"></div>
			<div id="text">
				<span>T</span>
				<span>h</span>
				<span>i</span>
				<span>s</span>
				<span> </span>
				<span>T</span>
				<span>h</span>
				<span>a</span>
				<span>t</span>
			</div>
		</div>
		`;
	}
}

customElements.define('typing-element', TypingElement);