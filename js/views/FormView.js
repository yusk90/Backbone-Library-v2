(function (app) {
    app.FormView = app.BaseView.extend({
        tagName: 'form',
        id: 'book-form',
        className: 'book-form',
        template: $('#book-form-template').html(),
        initialize: function () {
            this.model = new app.BookModel();
            this.listenTo(this.model, 'invalid', this.showErrors.bind(this, false))
                .listenTo(Backbone, 'clear-errors', this.clearErrors);
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        },
        events: {
            'click #submit-book': 'submit'
        },
        submit: function () {
            var $formFields = this.$('input, textarea'),
                formData = {};

            Backbone.trigger('clear-errors');
            function serializeFormData(input) {
                formData[_.capitalize(input.id)] = input.value;
            }
            _.each($formFields, serializeFormData, this);
            this.model.set(formData);
            if (this.model.isValid()) {
                var book = new app.BookModel();
                book.set(formData);
                book.set('shortDescription', this.truncate(book.get('fullDescription')));
                $formFields.val('');
                Backbone.trigger('add-to-collection', book);
                var bookView = new app.BookView({
                    model: book
                });
                Backbone.trigger('append-book', bookView);
            }
        }
    });
})(app);
