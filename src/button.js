function Button() {
}

Button.prototype.init = function() {
    var self = this;

    $('#element').click(function() {
        self.save();
    });
};

Button.prototype.save = function() {
    $('#element').html('Saved!');
};