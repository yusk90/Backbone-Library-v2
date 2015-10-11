(function (app) {
    app.BaseView = Backbone.View.extend({
        clearErrors: function () {
            this.$('.book-form__error').html('');
        },
        showErrors: function (editMode, model, errors) {
            var appendString = editMode ? '-' + model.cid : '';
            function showError (message, name) {
                this.$('#' + _.hyphen(name) + appendString)
                    .siblings('.book-form__error').html(message);
            }
            _.each(errors, showError, this);
        },
        truncate: function (string) {
            if (string.length > 140) {
                string = string.slice(0, 140) + '...';
            }
            return string;
        },
        disableElement: function (selector, mode) {
            var $element = this.$(selector),
                action = mode ? 'addClass' : 'removeClass';
            $element.prop('disabled', mode);
            $element[action]('button--disabled');
        },
        close: function () {
            if (this.childViews) {
                _.each(this.childViews, function (childView) {
                    childView.close();
                });
            }
            this.remove();
            this.unbind();
        }
    })
})(app);
