var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'MVC Test Suite',
    loaderPath  : { 'EX' : 'app' },
    
    autoCheckGlobals: true,
    expectedGlobals : [ 'Ext', 'EX' ],

    preload : [
       "resources/css/style.css",
       "../extjs/resources/css/ext-all.css",
       "../extjs/ext-all-debug.js"
    ]
    
});

Harness.start({
    group: 'Sanity',
    items: [
        'tests/sanity/sanity.t.js'
    ]
},{
    group: 'Model',
    items: [
        'tests/model/employee.t.js',
        'tests/model/department.t.js'
    ]
},{
    group: 'Store',
    items: [
        'tests/store/employees.t.js',
        'tests/store/departments.t.js'
    ]
},{
    group: 'View',
    items: [
        'tests/view/list.t.js',
        'tests/view/grid.t.js',
        'tests/view/form.t.js'
    ]
});
