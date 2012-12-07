Ext.define('EX.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    config:{
        addMode: false
    },

    bodyPadding: 10,
    title: '詳細',

    items: [{
        xtype: 'textfield',
        fieldLabel: '名前',
        allowBlank: false,
        name: 'name',
        anchor: '100%'
    }, {
        xtype: 'combobox',
        fieldLabel: '部署',
        allowBlank: false,
        queryMode: 'local',
        name: 'department_id',
        store: 'Departments',
        displayField: 'name',
        valueField: 'id',
        anchor: '100%'
    }, {
        xtype: 'textfield',
        fieldLabel: 'メール',
        vtype: 'email',
        name: 'email',
        anchor: '100%'
    }, {
        xtype: 'combobox',
        fieldLabel: '性別',
        name: 'gender',
        store: {
            fields: ['text'],
            data:[{
                text: '男'
            }, {
                text: '女'
            }]
        }
    }, {
        xtype: 'numberfield',
        fieldLabel: '年齢',
        name: 'age'
    }],
    buttons: [{
        text: '保存',
        formBind: true,
        handler: function(button) {
            var form = button.up('myform');

            form.fireEvent('saveCommand', form, form.getRecord(), form.getAddMode());
            form.collapse();
        }
    }, {
        text: 'キャンセル',
        handler: function(button) {
            var form = button.up('myform');
            
            form.collapse();
        }
    }]

});
