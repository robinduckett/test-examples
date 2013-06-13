suite('Animal', function() {
	var animal;
	
	beforeEach(function() {
		animal = new Animal();
	});
	
	suite('#eat()', function () {
		test('eating increases fullness', function() {
			var fullness = animal.getFullness();
			
			animal.eat(5);
			
			assert.ok(animal.getFullness() > fullness, 'animal is fuller than before');
		});
		
		test('eating decreases hunger', function() {
			var hunger = animal.getHunger();
			
			animal.eat(5);
			
			assert.ok(animal.getHunger() < hunger, 'animal is less hungry than before');
		})
	});
});