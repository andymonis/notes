/**
 * Page-Note
 */

import Context from "../context.js"

ko.components.register('page-note', {
    viewModel: function(params) {
        // Map to model 
        this.note = Context.context.note;

        Context.on("note", (ns, context, data) => {
            this.note().markdown.subscribe(() => {
                console.log("Markdown updated")
                    // Set the durty flag to trigger a save
                Context.action("dirty", true)
            })
        })
    },
    template: `
        <div class="pt-5 pb-6 px-5">
            <h1>Note</h1>  
            <div class="inset-x-0 transition transform origin-top-right">
                <div class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <textarea data-bind="textInput:$data.note().markdown" rows="20"></teaxtarea>
                </div>
            </div>
        </div>
    `
});

class Note {
    constructor(config = {}) {
        this.id = config.id || Date.now();
        this.markdown = ko.observable(config.markdown || "");
        this.label = ko.computed(() => {
            return this.markdown().substring(0, 16);
        });
    }
}

export default Note