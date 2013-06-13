describe('Animal', function() {
	var animal;
	
	beforeEach(function() {
		animal = new Animal();
	});
	
	describe('#eat()', function () {
		it('should increase fullness', function() {
			var fullness = animal.getFullness();
			
			animal.eat(5);
			
			console.log(animal.getFullness());
			
			chai.expect(animal.getFullness()).should.be.above(fullness);
		});
		
		it('should decrease hunger', function() {
			var hunger = animal.getHunger();
			
			animal.eat(5);
			
			chai.expect(animal.getHunger()).should.be.below(fullness);
		})
	});
});