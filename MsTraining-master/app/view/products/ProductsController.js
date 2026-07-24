Ext.define('MsTraining.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productscontroller',

    onAddProduct: function (btn) {
        Ext.Msg.alert('Products', 'Add Product button clicked!');
    }
});
