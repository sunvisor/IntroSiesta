Ext.define('EX.store.Employees', {

    extend: 'Ext.data.Store',
    model: 'EX.model.Employee',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: true

});
