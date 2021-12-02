import { h, render, Component} from '/modules/preact/preact.module.js';

import htm from '/modules/htm/htm.module.js';

import Route from '../route.js';

const html = htm.bind(h);

class Header extends Component {

    on_settings(){
        Route.route("/settings")
    }

    render({ page }, {}) {
        // const html = htm.bind(h);
        return html`
            <header>
                <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
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
                            <button type="button" class="hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

export default Header



