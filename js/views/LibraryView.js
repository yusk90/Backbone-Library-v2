(function (app) {
    app.LibraryView = app.BaseView.extend({
        tagName: 'ul',
        id: 'library-list',
        className: 'library-list',
        initialize: function () {
            this.childViews = [];
            this.listenTo(app.collection, 'reset', this.addAll)
                .listenTo(Backbone, 'add-to-collection', this.addToCollection)
                .listenTo(Backbone, 'append-book', this.appendView)
                .listenTo(Backbone, 'close-library', this.close);
            app.collection.fetch({reset: true});
        },
        addToCollection: function (book) {
            app.collection.create(book);
        },
        appendView: function (bookView) {
            this.childViews.push(bookView);
            this.$el.append(bookView.render().el);
        },
        addAll: function () {
            var $fragment = $(document.createDocumentFragment());
            function appendBook(book) {
                var bookView = new app.BookView({
                    model: book
                });
                $fragment.append(bookView.render().el);
                this.childViews.push(bookView);
            }
            app.collection.each(appendBook, this);
            this.$el.append($fragment);
        }
    });
})(app);
