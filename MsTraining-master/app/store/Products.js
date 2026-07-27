Ext.define('MsTraining.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    model: 'MsTraining.model.Product',
    requires: ['MsTraining.model.Product'],

    // Static sample data for now
    data: [
        { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1200 },
        { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 25 },
        { id: 3, name: 'HD Monitor', category: 'Electronics', price: 300 }
    ],

    sorters: ['category', 'name']
});
