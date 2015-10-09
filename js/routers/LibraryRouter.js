(function (app) {
    app.LibraryRouter = Backbone.Router.extend({
        routes: {
            '': 'indexPage',
            'book/:id': 'renderBook'
        },
        initialize: function () {
            //this.appView = new app.AppView();
        },
        renderBook: function (id) {
            //$('#book-form, #library-list').hide();
            Backbone.trigger('close-library');
        },
        indexPage: function () {
            //$('#book-form, #library-list').show();
            //this.appView.addAll();
            //Backbone.trigger('render-library');
        }
    })
})(app);
