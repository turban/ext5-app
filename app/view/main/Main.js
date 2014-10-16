/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extapp.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        title: 'MyApp',
        region: 'west',
        width: 250,
        split: true,
        collapsible: true
    },{
        region: 'center',
        xtype: 'panel',

        
        layout: {
            type: 'border'
        },
        items: [{
            region: 'center',
            xtype: 'panel',
            flex: 3
        },{
            region: 'south',
            xtype: 'panel',
            title: 'Code',
            flex: 1,
            split: true,
            collapsible: true,
            collapsed: true           
        }]        
    },{
        xtype: 'panel',
        title: 'Right',
        region: 'east',
        width: 130,
        split: true,
        collapsible: true
    }]
});
