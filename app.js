$(function () {
    new app.LibraryRouter();
    new app.AppView();
    Backbone.history.start({
        /*pushState: true,
        hashChange: false,
        root: '/localhost:63342/Backbone-Library/'*/
    });
});
