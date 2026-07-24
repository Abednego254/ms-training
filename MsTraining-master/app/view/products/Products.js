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
            fields: ['id', 'name', 'category', 'price'],
            data: [
                { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1200 },
                { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 25 },
                { id: 3, name: 'HD Monitor', category: 'Electronics', price: 300 }
            ]
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