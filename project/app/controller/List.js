Ext.define('EX.controller.List', {
    extend: 'Ext.app.Controller',

    stores:['Employees'],

    init: function() {
        var me = this;

        me.control({
            'mylist dataview': {
                itemclick: me.onListItemClick
            }
        });
    },

    onListItemClick: function(view, record, item, index, e, opt) {
        var me = this,
            store = me.getEmployeesStore();

        store.clearFilter(true);
        store.filter('department_id', record.get('id'));
    }
});
