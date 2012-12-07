StartTest(function(t) {
    t.diag('Employees Store');
    t.requireOk(
        [
            'EX.model.Employee',
            'EX.store.Employees'
        ],
        function() {
            var s = Ext.create('EX.store.Employees'),
                // 非同期処理の開始
                async = t.beginAsync();

            s.load({
                callback: function() {
                    var c, m;

                    // 非同期処理の完了
                    t.endAsync(async);
                    t.pass('loaded');
                    c = s.getCount();
                    t.isGreater(c, 0, Ext.String.format('レコードが{0}件', c));
                    m = s.getAt(0);
                    t.ok(m, Ext.String.format('最初のレコードのname:{0}', m.get('name')));
                }
            });
        }
    );
});
