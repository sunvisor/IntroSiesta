StartTest(function(t) {
    t.requireOk(
        [
            'EX.model.Department', 
            'EX.store.Departments', 
            'EX.view.List'
        ], 
        function() {
            var store, list;

            store = Ext.create('EX.store.Departments', {
                storeId: 'Departments'
            });
            list = Ext.create('EX.view.List', {
                renderTo : Ext.getBody(),
                height : 200,
                width : 300
            });
            
            t.waitForViewRendered('mylist dataview', function () {
                t.pass('mylist が描画されました');
            });

        }
    );
});
