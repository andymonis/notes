/**
 * list-item
 */

 ko.components.register('list-item', {
    viewModel: function(params) {
        this.data = params.data;
    },
    template: `
        <div class="list-item">
            <h1 data-bind="text:data.label">Note</h1>  
        </div>
    `
});

export default {}