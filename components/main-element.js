import { LitElement, html, css } from 'lit';

export class MainElement extends LitElement {
  static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
    	}
    a:link,
    a:visited,
    a:hover,
    a:active {
    		color: black;
    		text-decoration: none;
    		text-transform: uppercase;
    	}
	  #body {
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
		  	width: 220px;
		  	margin: 5px;
		  	padding-top: 60px;
		  	text-transform: uppercase;
		  }
    .box {
	      border: 2px solid #fff;
	      border-radius: 10px;
	    	padding: 3px;
	    }
		#grid {
				display: grid;
				gap: 5px;
				grid-template-columns: 1fr 100px;
				grid-template-rows: 1fr 30px 30px 30px;
				grid-template-areas:
					"a e"
					"b e"
					"c e"
					"d e";
			}
		#grid p {
				padding: 5px;
			}
		.intro, .bodyboon, .github, .social {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		.intro, .bodyboon, .github, .social, .skill {
				background: #fff;
				border-radius: 5px;
			}
		.intro {
				grid-area: a;
				padding: 10px;
				width: 100%;
			}
		.intro h1 {
				font-size: 28px;
				font-weight: 200;
				padding: 5px;
				margin-bottom: -10px;
			}
		.intro h2 {
				font-size: 18px;
				font-weight: 400;
				padding: 7px;
				margin-bottom: -10px;
			}
		.intro p {
				font-size: 14px;
				margin-left: 18px;
			}
		.bodyboon {
				grid-area: b;
				width: 100%;
			}
		.github {
				grid-area: c;
				width: 100%;
			}
		.social {
				grid-area: d;
				width: 100%;
			}
		.bodyboon p, .github p, .social p {
				font-size: 13px;
			}

		.skill {
				grid-area: e;
				font-size: 14px;
				text-align: center;
				text-transform: uppercase;
				width: 100%;
				margin: auto;
				padding: 10px 0;
			}
		ul {
				list-style-type: none;
			}
		li {
				padding: 3px 0;
			}

		@media screen and (min-width: 768px) {
			#body {
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
		<div id="body">
			<div>
				<video autoplay loop muted>
					<source src="../video/pexels-lam-loi-3492325-1280x720-31fps.mp4">
				</video>
			</div>

			<section>
				<div class="box">
				<div class="box">
				<div class="box">
					<div id="grid">
						<div class="intro">
							<h1>evan lanese</h1>
							<h2>software developer</h2>
							<p>front-end application</p>
						</div>

						<div class="bodyboon">
							<a router-ignore href="https://bodyboon.com"><p>www.bodyboon.com</p></a>
						</div>
						<div class="github">
							<a router-ignore href="https://github.com/boshimoto"><p>www.github.com/boshimoto</p></a>
						</div>
						<div class="social">
							<a router-ignore href="https://linkedin.com/in/evanlanese"><p>www.linkedin.com/in/evanlanese</p></a>
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
				</div>
				</div>
				</div>
			</section>
		</div>
		`;
  }
}

customElements.define('main-element', MainElement);
