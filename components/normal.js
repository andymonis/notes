import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

const html = htm.bind(h);

class Normal extends Component {
    render({ page }, { todos = [] }) {
        return html`
            <h1>Normal</h1>
        `;
    }
}

export default Normal