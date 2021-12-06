/**
 * list-item
 */

ko.components.register('v3-list-item', {
    viewModel: function(params) {
        this.data = params.data;
        this.select = params.select;
        this.delete = params.delete;

        this.on_open = (data, evt) => {
            // Trigger parent on select
            this.select(data.data, evt);
        }

        this.on_delete = (data, evt) => {
            // Trigger parent on select
            this.delete(data.data, evt);
        }
    },
    template: `
        <div class="inset-x-0 transition transform origin-top-right">
            <div class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div class="mr-2">
                            <button data-bind="click:on_delete" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12L18 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex-grow">
                            <p data-bind="text:data.label"></p>
                        </div>
                        <div class="mr-2">
                            <button data-bind="click:on_open" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 12M6 6l12 6"></path>
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