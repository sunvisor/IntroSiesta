Ext.define('EX.model.Department', {

    extend: 'Ext.data.Model',

    fields: [
        'id',
        'name'
    ],

    proxy: {
        type: 'ajax',
        url: 'data/department.php',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});

