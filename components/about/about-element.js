import {LitElement, html, css} from 'lit';
import {ImgElement} from './elements/img-element.js';
import {GifElement} from './elements/gif-element.js';


export class AboutElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}

    #grid {
	  		display: grid;
	  		grid-template-columns: 1fr;
	  		grid-template-rows: repeat(2, 1fr);
		  	height: calc(100vh - 85px);
		  }

    #heading-grid {
    		grid-column: 1 / 2;
				grid-row: 1 / 2;
				display: grid;
				grid-template-columns: 1fr;
	  		grid-template-rows: 1fr 2fr;
	  		align-items: center;
	  		justify-items: center;
	    }

	  #details {
		  	grid-column: 1 / 2;
		  	grid-row: 2 / 3;
		  	margin: 10px;
		  }

		h1 {
				font-weight: 200;
				line-height: 28px;
				text-align: center;
			}
		h2 {
				font-weight: 200;
				text-align: center;
			}

		.flag p {
				text-align: center;
				padding-bottom: 20px;
			}

		p {
				font-size: 18px;
				line-height: 24px;
				padding: 10px;
				padding-left: 20px;
			}
		p:nth-child(9) {
				font-weight: 700;
				font-style: italic;
				text-align: center;
				padding: 20px;
			}

    #image {
    		grid-column: 1 / 2;
				grid-row: 1 / 2;
	    	width: 175px;
	    	height: 172.5px;
	    	margin: auto;
	    }

	  .gif-container {
				grid-column: 1 / 2;
				grid-row: 2 / 3;
		  	display: flex;
		  	align-content: center;
		  	justify-content: center;
		  	padding: 40px;
		  }

		.gif {
				width: 255px;
				height: 255px;
			}
		.whitespace {
				height: 200px;
			}


		@media screen and (min-width: 728px) {
			main {
			  	min-height: 728px;
			  }

		  #heading-grid {
					grid-template-columns: 2fr 1fr;
		  		grid-template-rows: repeat(1, 1fr);
		    }

		  #details {
			  	grid-column: 1 / 2;
			  	grid-row: 1 / 2;
			  	margin: 10px;
			  }

			p {
			  	text-align: end;
				}

			#image {
	    		grid-column: 2 / 3;
					grid-row: 1 / 2;
		    	width: 175px;
		    	height: 172.5px;
		    	margin: auto;
		    }
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<main>
			<div id="grid">
				<div id="heading-grid">
					<div id="details">
						<h1>Evan Lanese</h1>
						<h2>Founder of Bodyboon</h2>
						<div class="flag">
							<p>[ ★彡 ]</p>
						</div>
						<p>A stubborn optimist, I find creative solutions to achieve my goals & challenge conventional expectations.</p>
						<p>Since 2020, my passion is being immersed in programming. Learning through online courseware, free tutorials, 1:1 mentorship, & months-on-end practice.</p>
						<p>I enjoy hiking, camping, being barefoot, & spiritual pursuits the most.</p>
						<p>I've driven 3,000+ miles twice cross country. Seen 25 different states. Hiked the Rockies, Sierra's, Appalachian. Swam in the Gulf of Thailand & Andaman Sea. And visited 2 foreign countries.</p>
						<p>Today, I live as an expat in northern Thailand, continuing to hone my software skills, & working fulltime on www.bodyboon.com.</p>
						<p>How to Contact:<br/>
						evan [at] bodyboon [dot] com</p>
					</div>

					<div id="image">
						<img-element></img-element>
					</div>
				</div>

				<div class="gif-container">
					<div class="gif">
						<gif-element></gif-element>
					</div>
				</div>

				<div class="whitespace"></div>
			</div>
		</main>
		`;
	}
}

customElements.define('about-element', AboutElement);