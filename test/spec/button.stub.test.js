describe('Button | Stub', function() {
    beforeEach(function() {
        sinon.stub(window, '$');
		
        var fakeHTML = sinon.stub({
			html: function() {
			}
		});

        $.withArgs('#element').returns(fakeHTML);
    });

    afterEach(function() {
        $.restore();
    });

    it('should say "Saved!"', function() {
        var button = new Button();
        button.save();

        expect($('#element').html).calledWith('Saved!');
    });
});