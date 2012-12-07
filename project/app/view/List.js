Ext.define('EX.view.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mylist',
    title: '部署',
    items: [{
        xtype: 'dataview',
        store: 'Departments',
        itemTpl: '<div class="department-wrap">{name}</div>',
        itemSelector: 'div.department-wrap'
    }]
});
