import {LitElement, html, css} from 'lit';


export class ImageElement extends LitElement {
	static styles = css`
    .top-img img {
				border-radius: 50%;
				position: absolute;
				width: 100%;
				height: 100%;
				animation: ghost 10s 2 alternate ease;
				opacity: 0;
			}
		.bot-img img {
				border-radius: 50%;
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
	`;
	constructor() {
		super();
	}

	render() {
		return html`
		<picture class="top-img">
			<img src="../img/colo-hi.png" alt="Hiking in the Colorado Mountains." />
		</picture>
		
		<picture class="bot-img">
			<img src="../img/colo.png" alt="Hiking in the Colorado Mountains." />
		</picture>
		`;
	}
}

customElements.define('image-element', ImageElement);