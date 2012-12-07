Ext.define('EX.model.Employee', {
    extend: 'Ext.data.Model',

    fields:[
        'id',
        'name',
        'department_id',
        'email',
        'gender',
        'age'
    ],

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/employee.php',
            update: 'data/update_employee.php',
            create: 'data/create_employee.php',
            destroy: 'data/delete_employee.php'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            encode: true,
            root: 'data'
        }
    },

    genderEn: function(value) {
        var me = this,
            gender = me.get('gender');

        if(gender == '男'){
            return 'male';
        } else if(gender == '女'){
            return 'female';
        } else {
            return gender;
        }
    }

});
