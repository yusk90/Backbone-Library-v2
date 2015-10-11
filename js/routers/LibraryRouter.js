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
            //app.appViews.close();
            Backbone.trigger('close-library');
            Backbone.trigger('show-book', id);
        },
        indexPage: function () {
            Backbone.trigger('render-index-page');
            //app.appViews.renderLibrary();
            //app.AppController.renderLibrary();
        }
    })
})(app);
