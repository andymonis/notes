import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

class App extends Component {
    addTodo() {
      const { todos = [] } = this.state;
      this.setState({ todos: todos.concat(`Item ${todos.length}`) });
    }

    render({ page }, { todos = [] }) {
        const html = htm.bind(h);
        let Header = ({ name }) => html`<h1>${name} List</h1>`
        let Footer = props => html`<footer ...${props} />`
        return html`
            <div class="app">
            <${Header} name="ToDo's (${page})" />
            <ul>
                ${todos.map(todo => html`
                <li key=${todo}>${todo}</li>
                `)}
            </ul>
            <button onClick=${() => this.addTodo()}>Add Todo</button>
            <${Footer}>footer content here<//>
            </div>
        `;
    }
}

export default App

  