/**
 * List
 */

ko.components.register('v3-list', {
    viewModel: function(params) {
        this.list = params.notes || [];
        this.selected = params.selected;
        this.deleted = params.deleted;

        this.on_select = (listitem, evt) => {
            // Ripple up to paremnt
            this.selected(listitem, evt);
        }

        this.on_delete = (listitem, evt) => {
            // Ripple up to paremnt
            this.deleted(listitem, evt);
        }
    },
    template: `
        <div data-bind="foreach:list" class="list">
             <v3-list-item params="data:$data, select:$parent.on_select, delete:$parent.on_delete"></v3-list-item>
        </div>
    `
});

export default {}