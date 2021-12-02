import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

import Route from '../route.js';

import Header from './header.js';

const html = htm.bind(h);

class Home extends Component {

    on_settings(){
        Route.route("/settings")
    }

    render({ page }, {}) {
        // const html = htm.bind(h);
        return html`
            <${Header} />
            <main data-bind="visible:$data.view()==='signin'" class="signin form-signin">
                
            </main>
        `;
    }
}

export default Home
