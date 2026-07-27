Ext.define('MsTraining.view.products.Products', {
    extend: 'Ext.panel.Panel',
    xtype: 'products',
    controller: 'productscontroller',
    title: 'Products Management',
    layout: 'fit',

    tbar: [
        {
            text: 'Add Product',
            iconCls: 'fas fa-plus',
            handler: 'onAddProduct'
        }
    ],

    items: [{
        xtype: 'grid',
        store: {
            type: 'products'
        },
        columns: [
            { text: 'ID', dataIndex: 'id', width: 60 },
            { text: 'Product Name', dataIndex: 'name', flex: 2 },
            { text: 'Category', dataIndex: 'category', flex: 1 },
            {
                text: 'Price ($)',
                dataIndex: 'price',
                flex: 1,
                renderer: function (val) { return '$' + val; }
            }
        ]
    }]
});