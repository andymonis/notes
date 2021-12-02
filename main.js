import { h, render, Component} from '/modules/preact/preact.module.js';
import htm from '/modules/htm/htm.module.js';

import Home from './components/home.js'
import App from './components/app.js'

import Normal from './components/normal.js';
import Settings from './components/settings.js';

import Route from "./route.js";
/**
 * Notes App 
 */
export default class Main {
    constructor(config) {}

    /**
     * Main start point for the app
     * @param {*} params
     */
    async init(params) {
        const html = htm.bind(h);
    
        Route.add("/", Home);
        Route.add("/normal", Normal);
        Route.add("/settings", Settings);

        render(html`<div class="notes"><route /></div>`, document.body);

        Route.route("/");
    }   
}