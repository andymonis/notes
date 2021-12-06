/**
 * Router
 */

import Context from "../context.js";

ko.components.register('router', {
    viewModel: function(params) {
        this.hide = {
            home: ko.observable(true),
            note: ko.observable(true)
        }
        this.paths = {
            "/": this.hide.home,
            "/note": this.hide.note
        }

        Context.on("route", (ns, context, data) => {
            // hide all
            for (let key in this.hide) {
                this.hide[key](true)
            }
            // show only selected
            let hider = this.paths[data];
            hider(false);
        })
    },
    template: `
        <page-home data-bind="css:{'hidden':hide.home}"></page-home>
        <page-note data-bind="css:{'hidden':hide.note}"></page-note>
    `
});

export default {}