import {LitElement, html, css} from 'lit';


export class VideoElement extends LitElement {
	static styles = css`
    video {
    		position: absolute;
    		height: 100%;
    		z-index: -1;
	    }
	`;
	constructor() {
		super();
	}

	render() {
		return html`
		<video autoplay loop muted>
			<source src="../video/pexels-lam-loi-3492325-1280x720-31fps.mp4">
		</video>
		`;
	}
}

customElements.define('video-element', VideoElement);