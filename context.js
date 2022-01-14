import V3Store from "/vee3/vee_store.js";
import Note from "./components/note.js";

let context = {
    name: ko.observable("notes"),
    route: ko.observable(""),
    notes: ko.observableArray([]),
    note: ko.observable(new Note()),
    dirty: ko.observable(false)
}

let listeners = {};

let $get = function(ns, model) {
    let prop = undefined;
    model = model || context;
    if (ns.length > 0) {
        let sub = ns.shift();
        return $get(ns, model[sub]);
    } else {
        return model;
    }
}

let notify = function(ns, context, data) {
    let _listeners = listeners[ns] || [];
    for (let i = 0; i < _listeners.length; i++) {
        _listeners[i](ns, context, data);
    }
}

let on = function(ns, fn) {
    listeners[ns] = listeners[ns] || [];
    listeners[ns].push(fn);
}

let route = function(name) {
    action("route", name)
}

/*
 * WATCHERS
 */

/*
 * ACTIONS
 */

/**
 * Generic action to effect a single property
 * @param {*} ns 
 * @param {*} data 
 */
let action = function(ns, data) {
    // Split NS into array of parts
    let parts = ns.split(".");
    // Get the observable
    let prop = $get(parts);
    // Set the data (assume its an observable)
    prop(data);
    // Notify changes
    notify(ns, context, data);
}

let action_load_notes = function() {
    let notes = V3Store.$local_get("notes");
    if (notes) {
        for (let i = 0; i < notes.length; i++) {
            let note = new Note(notes[i]);
            context.notes.push(note);
        }
    }
}

let action_save = async function(_note) {
    console.log("save");

    let json = ko.toJSON(context.notes);
    let res = await V3Store.$private_set(json, "notes")

    console.log(res)
}

let action_load = async function(_note) {
    console.log("load");

    let res = await V3Store.$private_get("notes");

    if (res.status === "ok" && res.obj !== undefined) {
        let notes = JSON.parse(res.obj);
        let new_notes = [];
        for (let i = 0; i < notes.length; i++) {
            let note = new Note(notes[i]);
            new_notes.push(note);
        }
        // Set notes from the server
        context.notes(new_notes);
    }

    console.log(res)
}

let action_new_note = function(_note) {
    // Set the note in the list of notes
    context.notes.push(_note);

    // Set the current note for viewing
    action("note", _note);
    // Update
    V3Store.$local_set("notes", ko.toJSON(context.notes));
    // Set the dirty flag to locally save
    action("dirty", true);
}

let action_del_note = function(_note) {
    let notes = context.notes();
    let index = -1;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === _note.id) {
            index = i;
        }
    }
    if (index > -1) {
        context.notes.splice(index, 1);
    }
    // Update
    Store.$local_set("notes", ko.toJSON(context.notes));
}

let action_timer_save = function() {
    if (context.dirty() === true) {
        console.log("saving local context");
        V3Store.$local_set("notes", ko.toJSON(context.notes));
        action("dirty", false);
    } else {
        console.log("NOT saving local context");
    }
}

window.setInterval(action_timer_save, 5000)

window.context = context;

export default {
    context,
    action,
    action_save,
    action_load,
    action_load_notes,
    action_new_note,
    action_del_note,
    on,
    route
};