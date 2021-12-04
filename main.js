import Context from "./context.js"

// import Route from "./route.js";

import Router from "./components/router.js"
import Header from "./components/header.js"
import Home from "./components/home.js"
import Note from "./components/note.js"
import List from "./components/list.js"
import ListItem from "./components/listitem.js"
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
    
        // Route.add("/", "<page-home></page-home>");
        // Route.add("/note", "page-note");

        // Route.route("/");

        
        await ko.applyBindings(Context.context)

        // Context.action("route", "/")
        Context.route("/")
    }   
}