Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller: 'postformcontroller',
    title: "Add Post",
    height: 420,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'postform',
        itemId: 'postform',
        scrollable: true,
        jsonSubmit: true,
        bodyPadding: 10,
        modelValidation: true,
        layout: 'form',
        items: [
            {
                allowBlank: true,
                // readOnly: true,
                xtype: 'textfield',
                // reference: 'postId',
                fieldLabel: 'Post ID',
                name: '_id',
                emptyText: 'Post id'
            },
            {
                allowBlank: true,
                xtype: 'datefield',
                fieldLabel: 'DOB',
                name: 'dateOfBirth',
                emptyText: 'Date of Birth',
                maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -18)
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'User ID',
                name: 'userId',
                emptyText: 'user id'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'Title',
                name: 'title',
                emptyText: 'title'
            },
            {
                allowBlank: false,
                xtype: 'textareafield',
                fieldLabel: 'Body',
                name: 'body',
                emptyText: 'body'
            },
            {
                xtype: 'combo',
                fieldLabel: 'Category',
                name: 'category',
                store: ['News', 'Tutorial', 'General'],
                value: 'General',
                allowBlank: false
            }
        ],

    }],
    buttons: [
        {
            text: 'Clear',
            handler: 'onClearClick'
        },
        {
            text: 'Save',
            handler: 'onSaveClick'
        },
    ]
})