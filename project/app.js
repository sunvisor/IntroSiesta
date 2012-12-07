Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'EX',

    autoCreateViewport: true,
    controllers: [
        'Main', 'Grid', 'Form', 'List'
    ],

    launch: function() {
    }
});
