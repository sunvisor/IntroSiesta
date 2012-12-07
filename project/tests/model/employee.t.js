StartTest(function(t) {
    t.diag('Employee Model');
    var rec = {
        name: '鬼瓦　権三',
        department_id: 1,
        email: 'gonzo@onigawara.com',
        gender: '男',
        age: 33
    };
        
    t.requireOk('EX.model.Employee', function() {
        var mod = Ext.create('EX.model.Employee', rec);
        
        t.is(mod.genderEn(), 'male', 'genderEn 動作OK');
        Ext.iterate(rec, function(key, value) {
            t.is(mod.get(key), value, key + 'フィールド読み出しok');
        });
    });
});
