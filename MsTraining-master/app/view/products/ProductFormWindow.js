Ext.define('MsTraining.view.products.ProductFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'productformwindow',
    controller: 'productscontroller', // Link to your products controller
    title: 'Add New Product',
    height: 350,
    width: 450,
    autoShow: true,
    closable: true,
    modal: true,
    layout: 'fit',

    items: [{
        xtype: 'form',
        reference: 'productform',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            allowBlank: false,
            labelWidth: 100
        },
        items: [
            {
                fieldLabel: 'Product Name',
                name: 'name',
                emptyText: 'Enter product name'
            },
            {
                xtype: 'combo',
                fieldLabel: 'Category',
                name: 'category',
                store: ['Electronics', 'Accessories', 'Furniture', 'Apparel'],
                value: 'Electronics',
                editable: false
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Price ($)',
                name: 'price',
                minValue: 0,
                decimalPrecision: 2,
                emptyText: '0.00'
            }
        ],
        buttons: [
            {
                text: 'Clear',
                handler: 'onClearClick'
            },
            {
                text: 'Save',
                formBind: true, // Only enabled when the form is valid
                handler: 'onSaveClick'
            }
        ]
    }]
});
