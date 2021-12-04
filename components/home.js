/**
 * Page-Home
 */

ko.components.register('page-home', {
    viewModel: function(params) {
    },
    template: `
    <div class="inset-x-0 p-2 transition transform origin-top-right">
        <div class="ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
                <h1>Home</h1>  
                <list></list>
            </div>
        </div>
    </div>
    `
});

export default {}