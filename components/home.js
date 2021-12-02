import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

import Route from '../route.js';

const html = htm.bind(h);

class Normal extends Component {
    addTodo() {
      const { todos = [] } = this.state;
      this.setState({ todos: todos.concat(`Item ${todos.length}`) });
    }
    render({ page }, { todos = [] }) {
      return html`
        <div class="app">
            <h2>Arses</h2>
        </div>
      `;
    }
}

class Home extends Component {

    on_settings(){
        Route.route("/settings")
    }

    render({ page }, {}) {
        // const html = htm.bind(h);
        return html`
            <div class="notes-home">
                    <svg class="w-full" viewBox="0 0 193 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/">
                    <g transform="matrix(1,0,0,1,-136.864,-159.289)">
                        <g>
                        <text
                            x="136.164px"
                            y="197.089px"
                            style=" font-family: 'Avenir-Book', 'Avenir'; font-size: 50px; fill: rgb(6, 182, 212);">
                            vee
                        </text>
                        <text
                            x="215.864px"
                            y="197.089px"
                            style="font-family: 'Avenir-Book', 'Avenir';font-size: 50px;">
                            thr
                            <tspan x="275.964px 303.764px " y="197.089px 197.089px ">
                            ee
                            </tspan>
                        </text>
                        </g>
                    </g>
                </svg>
                <button onclick=${() => {this.on_settings() }}>settings</button>
            </div>
        `;
    }
}

export default Home
