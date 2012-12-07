Ext.define('EX.controller.Form', {
    extend: 'Ext.app.Controller',

    stores: ['Employees'],

    init: function() {
        var me = this;

        me.control({
            'myform': {
                saveCommand: me.doSave
            }
        });
    },

    doSave: function(form, record, addMode) {
        var me = this,
            store = me.getEmployeesStore();

        record.set(form.getValues());
        if( addMode ) {
            store.add(record);
        }
        store.sync();
            
    }
});
