Ext.define('MsTraining.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productscontroller',

    // 1. Open the form window
    onAddProduct: function (btn) {
        Ext.create('MsTraining.view.products.ProductFormWindow');
    },

    // 2. Clear form fields
    onClearClick: function (btn) {
        let formWindow = this.getView();
        let form = formWindow.down('form').getForm();
        form.reset();
    },

    // 3. Save the new product to the store
    onSaveClick: function (btn) {
        let formWindow = this.getView();
        let formPanel = formWindow.down('form');
        let form = formPanel.getForm();

        if (form.isValid()) {
            let values = form.getValues();

            // Find the grid store in the main products tab
            let grid = Ext.ComponentQuery.query('products grid')[0];
            if (grid) {
                let store = grid.getStore();

                // Generate a simple unique ID for static demo data
                let nextId = store.getCount() + 1;

                // Add new record to the store
                store.add({
                    id: nextId,
                    name: values.name,
                    category: values.category,
                    price: parseFloat(values.price)
                });

                // Close the window
                formWindow.close();
            } else {
                Ext.Msg.alert('Error', 'Could not locate the products grid store.');
            }
        }
    }
});
