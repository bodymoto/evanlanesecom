import { LitElement, html, css } from 'lit';

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
    		color: black;
    		text-decoration: none;
    		text-transform: uppercase;
    	}
    a:hover {
    		color: darkorange;
    		font-weight: 700;
	    	transition: 0.3s;
	    	transform: scale(1.1);
	    }
	  main {
		  	position: relative;
		  	height: 90vh;
		  }
    video {
    		position: absolute;
    		object-fit: cover;
	    	width: 100%;
	    	height: 100%;
	    	z-index: -1;
	    }
	  section {
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
		.intro, .bodyboon, .github, .social {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 5px;
			}
		.intro, .bodyboon, .github, .social, .skill {
				background: #fff;
				border-radius: 5px;
				width: 100%;
			}
		.intro {
				grid-area: a;
			}
		.intro h1 {
				font-size: 32px;
				font-weight: 200;
				margin-bottom: -10px;
			}
		.intro h2 {
				font-size: 18px;
				font-weight: 400;
				padding: 7px;
				margin-left: 12px;
				margin-bottom: -10px;
			}
		.intro p {
				font-size: 14px;
				margin-left: 30px;
				opacity: 0.6;
			}
		.bodyboon {
				grid-area: b;
			}
		.github {
				grid-area: c;
			}
		.social {
				grid-area: d;
			}
		.bodyboon p, .github p, .social p {
				font-size: 13px;
			}
		.skill {
				grid-area: e;
				font-size: 14px;
				text-align: center;
				margin: auto;
				padding: 20px 0;
			}
		ul {
				list-style-type: none;
			}
		li {
				padding: 3px 0;
			}

		#image {
				margin: auto;
				margin-top: 75px;
				width: 300px;
				height: 300px;
			}
		img {
				animation: ghost 12s infinite alternate ease;
				border-radius: 50%;
				width: 100%;
				height: 100%;
			}

		@keyframes ghost {
				from {
					opacity: 0;
				}
				30% {
					opacity: 0;
				}
				to {
					opacity: 0.8;
				}
			}

		@media screen and (min-width: 768px) {
			main {
				min-height: 768px;
		  	max-height: 1024px;
		  }
		}
	`;

  constructor () {
    super();
  }

  render () {
    return html`
		<main>
			<div>
				<video autoplay loop muted>
					<source src="../video/pexels-lam-loi-3492325-1280x720-31fps.mp4">
				</video>
			</div>

			<section>
				<div id="grid">
					<div class="intro">
						<h1>evan lanese</h1>
						<h2>software developer</h2>
						<p>front-end application</p>
					</div>

					<div class="bodyboon">
						<a router-ignore href="https://bodyboon.com" target="_blank"><p>www.<b>bodyboon</b>.com (latest work)</p></a>
					</div>
					<div class="github">
						<a router-ignore href="https://github.com/boshimoto" target="_blank"><p>www.<b>github</b>.com</p></a>
					</div>
					<div class="social">
						<a router-ignore href="https://linkedin.com/in/evanlanese" target="_blank"><p>www.<b>linkedin</b>.com</p></a>
					</div>

					<div class="skill">
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
				<img src="../img/colo.png" alt="Hiking in the Colorado Mountains." />
			</div>
		</main>
		`;
  }
}

customElements.define('home-element', HomeElement);
