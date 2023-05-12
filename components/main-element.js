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
	  #test {
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
    #test div {
	      border: 1px solid black;
    		margin: 5px;
	    	padding: 20px;
	    }
	  #test p {
		  	text-transform: uppercase;
		  	padding: 2px;
		  }
		img {
				display: block;
			}
	`;

  constructor () {
    super();
  }

  render () {
    return html`
		<div id="test">
			<video autoplay loop muted>
				<source router-ignore src="https://player.vimeo.com/progressive_redirect/playback/744700964/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=0d1140355d407ef25c1885135c3d5475c0fd7e434101ec5d256e95d34e9d8fa1" type="video/mp4">
			</video>
			<div>
				<p>evan lanese</p>
				<p>software developer</p>
				<p>front-end application</p>
			</div>
			<div>
				<p>javascript</p>
				<p>lit framework</p>
				<p>web component architecture</p>
			</div>
			<div>
				<a href="https://bodyboon.com"><p>www.bodyboon.com</p></a>
				<a href="https://github.com/boshimoto"><p>www.github.com/boshimoto</p></a>
				<a href="https://linkedin.com/in/evanlanese"><p>www.linkedin.com/in/evanlanese</p></a>
			</div>
		</div>
		`;
  }
}

customElements.define('main-element', MainElement);
