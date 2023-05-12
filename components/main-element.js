import {LitElement, html, css} from 'lit';

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
		  }
    video {
    		position: absolute;
	    	top: 0;
	    	right: 0;
	    	bottom: 0;
	    	left: 0;
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
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<div id="test">
			<video>
				<source router-ignore src="pexels-colors-motion-graphics-13648275-960x540-30fps.mp4" type="video/mp4">
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