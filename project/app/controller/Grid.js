Ext.define('EX.controller.Grid', {
    extend: 'Ext.app.Controller',

    refs: [
        {ref: 'myForm', selector: 'myform'},
        {ref: 'myGrid', selector: 'mygrid'}
    ],

    stores: ['Employees'],
    models: ['Employee'],

    init: function() {
        var me = this;

        me.control({
            'mygrid': {
                itemdblclick: me.onGridItemDblClick
            },
            'button#addButton': {
                click: me.onAddButtonClick
            },
            'button#deleteButton': {
                click: me.onDeleteButtonClick
            }
        });
    },

    onGridItemDblClick: function(view, record) {
        var me = this,
            form = me.getMyForm();

        form.expand();
        form.setAddMode(false);
        form.getForm().loadRecord(record);
    },

    onAddButtonClick: function(button) {
        var me = this,
            form = me.getMyForm(),
            newRec = me.getEmployeeModel().create();

        form.setAddMode(true);
        form.expand();
        form.getForm().loadRecord(newRec);
    },

    onDeleteButtonClick: function(button) {
        var me = this,
            records = me.getMyGrid().getSelectionModel().getSelection(),
            store = me.getEmployeesStore();

        Ext.iterate( records, function(record) {
            store.remove(record);
        });
        store.sync();
         
    }
});
