/* * * * * * * * * * * * * * * * * * * * * *
fonts: https://japanesefonts.org/
tinyBind : https://blikblum.github.io/tinybind/docs/guide/
	* * * BACKLOG * * *
- 

	* * * TODO * * *
- 

* * * * * * * * * * * * * * * * * * * * * */
var idCpt = 0;
var user = {
	id: ++idCpt,
	name: 'Dude',
	age: 22,
	deathDate: new Date('2025-05-15'),
	money: 2250,
	datInnerMethod: function(ev)  {
		console.log(ev);
		user.age++;
		user.deathDate = addMonths(user.deathDate, 1);
	}
}
function addMonths(date, months) {
	debugger;
	let newMonth = (1*date.getMonth()) + months;
	let newDate = new Date(date.getYear() + '-' + newMonth + '-' + date.getDate());
  	return newDate;
}

function initTinyBind() {
	initFormatters();
	initBinding();
}
function initBinding() {
	tinybind.bind(document.getElementById('container'), {player: user})
}
function initFormatters() {
	tinybind.formatters.currency = {
		read: function(value) {
			return (value / 100).toFixed(2)
		},
		publish: function(value) {
			let res =  Math.round(parseFloat(value) * 100);
			return res ? res : 0.00;
	  }
	}
}
function init() {
	initTinyBind();
	setEventsListeners();
}
function setEventsListeners() {
	$('body')
	.on('click', 'a.link', function(ev) {

	})
	.on('mousedown', 'a.link', function(ev) {
		
	}).on('mouseup', 'a.link', function(ev) {
		
	});
}

$(document).ready(function() {
	init();
});
