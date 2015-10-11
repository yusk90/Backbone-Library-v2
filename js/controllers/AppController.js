(function (app) {
    app.AppController = {
        renderLibrary: function () {
            var $container = $('#content');
            var form = new app.FormView();
            $container.append(form.render().el);
            var library = new app.LibraryView();
            $container.append(library.el);
        }
    }
})(app);
