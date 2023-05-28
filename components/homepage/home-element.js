import { LitElement, html, css } from 'lit';
import { VideoElement } from './elements/video-element.js';
import { H1Element } from './elements/h1-element.js';
import { ImageElement } from './elements/image-element.js';


export class HomeElement extends LitElement {
  static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}
    a:link,
    a:visited,
    a:active {
    		color: #30A2FF;
    		font-weight: 600;
    		text-decoration: none;
    		text-transform: uppercase;
    		z-index: 3;
    	}
    a:hover {
    		color: darkorange;
	    	transition: 0.3s;
	    	margin-right: 5px;
	    	margin-left: 5px;
	    }

	  main {
	  		display: grid;
	  		grid-template-columns: 1fr;
	  		grid-template-rows: repeat(2, 1fr);
		  	height: calc(100vh - 85px);
		  }

		#video {
				grid-column: 1 / 2;
				grid-row: 1 / 3;
				position: relative;
	    	top: 0;
	    	right: 0;
	    	bottom: 0;
    		overflow: hidden;
	    	left: 0;			
	    }

	  section {
	  		grid-column: 1 / 2;
				grid-row: 1 / 2;
		  	margin: 5px;
		  	padding-top: 60px;
		  	text-transform: uppercase;
		  }

		#grid {
				display: grid;
				gap: 5px;
				grid-template-columns: 1fr 25%;
				grid-template-rows: 1fr 40px 40px 40px;
				grid-template-areas:
					"a e"
					"b e"
					"c e"
					"d e";
			}

		.name-title, 
		.bodyboon, 
		.github, 
		.linkedin, 
		.skills {
				background: #fff;
				border-radius: 5px;
				width: 100%;
			}
		.name-title {
				grid-area: a;
				display: flex;
				gap: 5px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		.name-title h2 {
				font-size: 18px;
				font-weight: 400;
			}
		.name-title p {
				font-size: 14px;
				margin-left: 30px;
			}
		.bodyboon {
				grid-area: b;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		.github {
				grid-area: c;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		.linkedin {
				grid-area: d;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

		.bodyboon p,
		.github p,
		.linkedin p {
				font-size: 13px;
			}
		.skills {
				grid-area: e;
				font-size: 14px;
				text-align: center;
				padding: 20px 0;
				margin: auto;
			}

		ul {
				list-style-type: none;
			}
		li {
				padding: 3px 0;
			}

		#image {
				grid-column: 1 / 2;
				grid-row: 2 / 3;
				position: relative;
				width: 300px;
				height: 300px;
				margin: auto;
			}

		@media screen and (max-height: 370px) {
				main {
					min-height: 728px;
			  }
			}

		@media screen and (min-width: 728px) {
			main {
					min-height: 728px;
			  }

			#grid {
					max-width: 728px;
					margin: auto;
				}

		  .name-title h2 {
					font-size: 22px;
				}
			.name-title p {
					font-size: 18px;
				}
			.bodyboon p,
			.github p,
			.linkedin p {
					font-size: 18px;
				}
			.skills {
					font-size: 18px;
				}
		}
	`;

  constructor () {
    super();
  }

  render () {
    return html`
		<main>
			<div id="video">
				<video-element></video-element>
			</div>

			<section>
				<div id="grid">
					<div class="name-title">
						<div class="h1">
							<h1-element></h1-element>
						</div>
						<h2>software developer</h2>
						<p>website application</p>
					</div>

					<div class="bodyboon">
						<p>www.</p>
						<a router-ignore href="https://bodyboon.com" target="_blank">bodyboon</a>
						<p>.com</p>
						<p>(current)</p>
					</div>

					<div class="github">
						<p>www.</p>
						<a router-ignore href="https://github.com/boshimoto" target="_blank">github</a>
						<p>.com</p>
					</div>

					<div class="linkedin">
						<p>www.</p>
						<a router-ignore href="https://linkedin.com/in/evanlanese" target="_blank">linkedin</a>
						<p>.com</p>
					</div>

					<div class="skills">
						<ul>
							<li>javascript</li>
							<li>html/css</li>
							<li>lit</li>
							<li>express</li>
							<li>node</li>
							<li>git</li>
							<li>webpack</li>
							<li>babel</li>
							<li>web components</li>
						</ul>
					</div>
				</div>
			</section>

			<div id="image">
				<image-element></image-element>
			</div>
		</main>
		`;
  }
}

customElements.define('home-element', HomeElement);
