describe('Button | jQuery DOM', function() {
    beforeEach(function() {
        sinon.stub(window, '$');

        $.withArgs('#element').returns(jQuery('<div></div>'));
    });

    afterEach(function() {
        $.restore();
    });

    it('should say "Saved!"', function() {
        var button = new Button();
        button.save();

        expect($('#element').html()).to.equal('Saved!');
    });
});
