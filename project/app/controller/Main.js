Ext.define('EX.controller.Main', {
    extend: 'Ext.app.Controller',

    models: [
        'Department', 'Employee'
    ],
    stores: [
        'Departments', 'Employees'
    ],
    views: [
        'List', 'Grid', 'Form'
    ],
    init: function() {
    },
    onLaunch: function() {
    }
});
