/**
 * Page-Home
 */

import Context from "../context.js"

ko.components.register('page-home', {
    viewModel: function(params) {
        // Map to model 
        this.notes = Context.context.notes;
        this.shared_notes = Context.context.notes;

        this.on_note_selected = function(note, evt) {
            Context.action("note", note);
            Context.action("route", "/note");
        }

        this.on_note_deleted = function(note, evt) {
            console.log("delete me");
            Context.action_del_note(note);
        }
    },
    template: `
        <div class="pt-5 pb-6 px-5">
            <h1>private</h1>  
            <v3-list params="notes:notes,selected:on_note_selected,deleted:on_note_deleted"></v3-list>
            <h1>shared</h1>  
            <v3-list params="notes:shared_notes,selected:on_note_selected,deleted:on_note_deleted"></v3-list>
        </div>
    `
});

export default {}