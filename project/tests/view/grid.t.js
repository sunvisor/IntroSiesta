StartTest(function(t) {
    t.requireOk(
        [
            'EX.model.Employee', 
            'EX.store.Employees', 
            'EX.model.Department', 
            'EX.store.Departments', 
            'EX.view.Grid'
        ], 
        function() {
            var grid, employees, departments;
            
            employees = Ext.create('EX.store.Employees',{
                storeId: 'Employees'
            });
            departments = Ext.create('EX.store.Departments', {
                storeId: 'Departments'
            });

            grid = Ext.create('EX.view.Grid');

            t.chain({
                waitFor: 'storesToLoad',
                args: [
                    employees, departments
                ]
            }, function (next) {
                grid.render(Ext.getBody());
                next();
            }, {
                waitFor: 'rowsVisible',
                args: [grid]
            }, function(next) {
                t.is(
                    grid.store.getCount(),
                    grid.getView().getNodes().length,
                    '全てのデータが表示された'
                );
                t.matchGridCellContent(
                    grid, 0, 1,
                    grid.store.first().get('name'),
                    'Storeのnameフィールドとグリッドの表示が一致'
                );
            });
        }
    );
});
