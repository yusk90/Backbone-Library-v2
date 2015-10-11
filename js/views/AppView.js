(function (app) {
    app.AppView = app.BaseView.extend({
        el: '#content',
        initialize: function () {
            this.childViews = [];
            app.collection = new app.LibraryCollection();
            this.listenTo(Backbone, 'render-index-page', this.renderLibrary)
                .listenTo(Backbone, 'show-book', this.renderBook);
        },
        renderLibrary: function () {
            this.close();
            var form = new app.FormView();
            this.childViews.push(form);
            this.$el.append(form.render().el);
            var library = new app.LibraryView();
            this.$el.append(library.el);
            this.childViews.push(library);
        },
        renderBook: function (id) {
            this.close();
            var book = new app.BookViewDetailed({
                model: app.collection.get(id)
            });
            this.$el.append(book.render().el);
            this.childViews.push(book);
        },
        close: function () {
            _.each(this.childViews, function (childView) {
                childView.remove();
                childView.unbind();
            });
            this.childViews = [];
        },
        changeView: function () {

        }
    })
})(app);
