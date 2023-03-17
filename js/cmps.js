
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
				/* example */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class CharacterAvatar extends tinybind.Component {
	static get template() {
		console.log({char});
		return `      
			<div class="character-avatar-container">
				<div class="click-zone" rv-id={char.id}></div>
				<img rv-src={char.icon} />
			</div>
		`
	}
	static get properties() {
		return {
			char: true
		}
    }
}