/**
 * App-Header
 */

// import Route from "../route.js";
import Context from "../context.js";

import Note from "./note.js"

ko.components.register('app-header', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.chosenValue = params.value;

        // Behaviors
        this.on_back = () => {
            // console.log("back");
            // Route.route("/");
            Context.route("/")
                // Context.action("route", "/")
        };
        this.on_new = () => {
            let note = new Note({ markdown: "<new>" })
            Context.action_new_note(note);
            Context.route("/note")
        };
        this.on_save = () => {
            Context.action_save();
        };
        this.on_load = () => {
            Context.action_load();
        };
    },
    template: `
        <div class="fixed z-50 top-0 inset-x-0 transition transform origin-top-right">
            <div class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                    <button data-bind="click:on_back" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12L18 6M6 12l12 6"></path>
                        </svg>
                    </button>
                    <div>
                        <svg class="w-24" viewBox="0 0 193 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/">
                            <g transform="matrix(1,0,0,1,-136.864,-159.289)">
                            <g>
                                <text x="136.164px" y="197.089px" style=" font-family: 'Avenir-Book', 'Avenir'; font-size: 50px; fill: rgb(6, 182, 212);">vee</text>
                                <text x="215.864px" y="197.089px" style="font-family: 'Avenir-Book', 'Avenir';font-size: 50px;">thr<tspan x="275.964px 303.764px " y="197.089px 197.089px ">ee</tspan></text>
                            </g>
                            </g>
                        </svg>
                    </div>
                    <div class="-mr-2">
                    <button data-bind="click:on_save">save</button>
                    <button data-bind="click:on_load">load</button>
                    <button data-bind="click:on_new" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18L12 6M6 12l12 0"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `
});

export default {}