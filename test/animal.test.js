describe('Animal', function() {
	var animal;
	
	beforeEach(function() {
		animal = new Animal();
	});
	
	describe('#eat()', function () {
		it('should increase fullness', function() {
			var fullness = animal.getFullness();
			
			animal.eat(5);
			
			expect(animal.getFullness()).toBeGreaterThan(fullness);
		});
		
		it('should decrease hunger', function() {
			var hunger = animal.getHunger();
			
			animal.eat(5);
			
			expect(animal.getHunger()).toBeLessThan(hunger);
		})
	});
});