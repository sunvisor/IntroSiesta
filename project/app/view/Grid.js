Ext.define('EX.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid',

    title: '従業員',

    store: 'Employees',
    columns: [{
        xtype: 'gridcolumn',
        dataIndex: 'department_id',
        text: '部署',
        renderer: function(value) {
            var store = Ext.getStore('Departments'),
                rec = store.getById(value);

            return rec.get('name');
        },
        flex: 1
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'name',
        text: '名前',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        dataIndex: 'gender',
        text: '性別',
        width: 80
    }, {
        xtype: 'numbercolumn',
        dataIndex: 'age',
        text: '年齢',
        format: '0',
        width: 80
    }],

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '追加',
            itemId: 'addButton'
        }, {
            text: '削除',
            itemId: 'deleteButton'
        }]
    }, {
        xtype: 'pagingtoolbar',
        store: 'Employees',
        dock: 'bottom'
    }]

});
