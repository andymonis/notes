import Context from "./context.js"

import Router from "./components/router.js"
import Header from "./components/header.js"
import Home from "./components/home.js"
import Note from "./components/note.js"
import List from "./components/v3list.js"
import ListItem from "./components/v3listitem.js"

import V3Store from "/vee3/vee_store.js";

/**
 * Notes App 
 */
export default class Main {
    constructor(config) {
        Context.$api = config.$api;

        V3Store.instanceId(config.app.instancedid);
    }

    /**
     * Main start point for the app
     * @param {*} params
     */
    async init(params) {
        await ko.applyBindings(Context.context)

        // Context.action("route", "/")
        Context.route("/")
            // Load initial view
        Context.action_load_notes()
    }
}