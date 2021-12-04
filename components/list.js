/**
 * List
 */

 ko.components.register('list', {
    viewModel: function(params) {
        this.list = [
            {label:"note 1"},
            {label:"note 2"}
        ]
    },
    template: `
        <div data-bind="foreach:list" class="list">
             <list-item params="data:$data"></list-item>
        </div>
    `
});

export default {}