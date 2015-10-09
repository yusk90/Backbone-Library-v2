(function (app) {
    app.AppView = app.BaseView.extend({
        initialize: function () {
            var $container = $('#content');
            var form = new app.FormView();
            $container.append(form.render().el);
            var library = new app.LibraryView();
            $container.append(library.el);
        },
        changeView: function () {

        }
    })
})(app);
