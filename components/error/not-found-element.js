import {LitElement, html, css} from 'lit';

export class NotFoundElement extends LitElement {
	static styles = css`
		* {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
	      font-family: "Andale Mono", sans-serif;
    	}

		main {
				height: calc(100vh - 85px);
			}

		div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 30px 10px;
				margin: auto;
			}

		h1 {
				font-size: 125px;
				font-weight: 200;
				letter-spacing: -15px;
				line-height: 100px;
				text-transform: uppercase;
			}

		#p p:nth-child(1) {
				font-size: 22px;
			}
		#p p:nth-child(2) {
				font-size: 20px;
				padding: 40px 20px;
			}
		span {
				font-weight: 700;
			}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<main>
			<div>
				<div>
					<h1>Page Not<br/> Found</h1>
				</div>
				<div id="p">
					<p>Try again, you turkey.</p>
					<p>Error Code <span>404</span><p>
				</div>
			</div>
		</main>
		`;
	}
}

customElements.define('not-found-element', NotFoundElement);