import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

import Route from '../route.js';

const html = htm.bind(h);

class Settings extends Component {
    on_normal(){
        Route.route("/")
    } 

    render({ page }, { todos = [] }) {
        return html`
            <h1>Settings</h1>
            <button onclick=${() => {this.on_normal() }}>normal</button>
        `;
    }
}

export default Settings