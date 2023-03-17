
var charData01 = {
	name: "Falzen",
	age: 37,
	money: 2000,
	hp: 98,
	hpMax: 100,
	mp: 16,
	mpMax: 16,
	icon: 'img/icons/club.jpg'
}
var charData02 = {
	name: "Freyggen",
	age: 37,
	money: 1555,
	hp: 49,
	hpMax: 50,
	mp: 48,
	mpMax: 50,
	icon: 'img/icons/spade.jpg'
}
class Character {
	constructor(data) {  // Constructor
		this.id = ++idCpt;
	    this.name = data.name;
		this.age = data.age;
		this.money = data.money;
		this.hp = data.hp;
		this.hpMax = data.hpMax;
		this.mp = data.mp;
		this.mpMax = data.mpMax;
		this.xp = 0;
		this.xpToNextLevel = 10;
		this.icon = data.icon;
	}

	get sayHello() {
		return this.name + ' says hello.';
    }
}