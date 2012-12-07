StartTest(function(t) {
    t.diag('Depertment Model');
    t.requireOk('EX.model.Department', function() {
        var dept = '開発部', mod;

        mod = Ext.create('EX.model.Department', {
            name: dept
        });
        t.is(mod.get('name'), dept, 'nameフィールド読み出しOK');

    });
});
