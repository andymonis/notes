import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

import Settings from './components/settings.js';

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

class Route {
    constructor(){
        this._paths = {};
    }

    /**
     * 
     * @param {*} path 
     * @param {*} component 
     */
    add(path,component){
        this._paths[path] = component
    }

    route(path){
        let _route = this._paths[path];
        if(_route!==undefined){
            let component = _route;
            let output = html`${component}`;
            render(html`<${component} />`,document.querySelector("route"));
        }
    }
}

export default new Route()