Ext.define('MsTraining.model.Product', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'category', type: 'string' },
        { name: 'price', type: 'number' }
    ]
});
