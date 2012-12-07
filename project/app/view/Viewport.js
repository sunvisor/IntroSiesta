Ext.define('EX.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',

    items: [{
        title: '部署',
        xtype: 'mylist',
        region: 'west',
        width: 200,
        weight: 20,
        split: true
    }, {
        xtype: 'mygrid',
        title: '社員',
        region: 'center'
    }, {
        xtype: 'myform',
        title: '詳細',
        region: 'south',
        collapsible: true,
        collapsed: true,
        collapseMode: 'mini',
        weight: 10
    }]
});
