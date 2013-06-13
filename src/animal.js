Animal = (function() {
	function Animal() {
		this.hunger = 10;
		this.fullness = 0;
	}
	
	Animal.prototype.getHunger = function() {
		return this.hunger;
	}
	
	Animal.prototype.getFullness = function () {
		return this.fullness;
	};
	
	Animal.prototype.eat = function(amount) {
		this.hunger -= amount;
		this.fullness += amount;
	}
	
	return Animal;
})()