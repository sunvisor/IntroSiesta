StartTest(function(t) {
    t.diag('Depertments Store');
    t.requireOk([
            'EX.model.Department',
            'EX.store.Departments'
        ],
        function() {
            var s = Ext.create('EX.store.Departments');

            t.chain(
                function (next) {
                    s.load({
                        callback: function() {
                            next();
                        }
                    });
                },
                function (next) {
                    var c,m;

                    t.pass('loaded');
                    c = s.getCount();
                    t.isGreater(c, 0, Ext.String.format('レコードが{0}件', c));
                    m = s.getAt(0);
                    t.ok(m, Ext.String.format('最初のレコードのname:{0}', m.get('name')));
                    t.ok(m, Ext.String.format('最初のレコードのid:{0}', m.get('id')));
                }
            );
        }
    );
});
