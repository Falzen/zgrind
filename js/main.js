/* * * * * * * * * * * * * * * * * * * * * *
fonts: https://japanesefonts.org/
tinyBind : https://blikblum.github.io/tinybind/docs/guide/
	* * * BACKLOG * * *
- 

	* * * TODO * * *
- 

* * * * * * * * * * * * * * * * * * * * * */
var idCpt = 0;

var falzn = new Character(charData01);
console.log('falzn : ', falzn);
var freyg = new Character(charData02);
console.log('freyg : ', freyg);












































var user = {
	id: ++idCpt,
	name: 'Dude',
	age: 22,
	deathDate: new Date('2025-05-15'),
	money: 2250,
	datInnerMethod(ev)  {
		user.age++;
		//user.deathDate = addMonths(user.deathDate, 1);
		user.deathDate = addMonths(user.deathDate, 1);
	}
}
function addMonths(oldDate, months) {
	let newYear = oldDate.getFullYear();
	let newMonth = (1*oldDate.getMonth()) + 1 + months;
	let newDay = oldDate.getDate();
	var newDate = new Date(newYear + '-' + newMonth + '-' + newDay);
	return newDate;
}

function initTinyBind() {
	initFormatters();
	initBinding();
}
function initBinding() {
	tinybind.bind(document.getElementById('container'), {player: falzn})
}
function initFormatters() {
	tinybind.formatters.date = {
		read: function(value) {
			return getCleanDate(value);
		},
		publish: function(value) {
			return value;
	  }
	}
}
function init() {
	initTinyBind();
	setCustomComponents();
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

function addCmp(cmp, domid) {
	$('#'+domId).append(cmp);
}

/* 
class MySecondComponent extends tinybind.Component {
	static get template() {
		return `      
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ messagestartb }</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ messageb }</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ messageendb }</p>
		`
	}
	static get properties() {
		return {
			messageb: true,
			messagestartb: true,
			messageendb: true
		}
    }
}

*/
function setCustomComponents() {
	// customElements.define('my-component', MyComponent);
	customElements.define('character-avatar', CharacterAvatar);
}