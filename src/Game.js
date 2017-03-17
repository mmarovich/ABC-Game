import React, { Component } from 'react';


class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div className="game">
				<div className="option">
					<div className="fields">
						<div className="field-block">
							A
						</div>
					</div>
					<div className="buttons">
						<a href="#" className="button prev">Previous</a>
						<a href="#" className="button sound">Play Sound Again</a>
						<a href="#" className="button next">Next</a>
					</div>
					<div className="fields">
						<div className="field-block">
							<div className="left-field">A</div>
							<div className="right-field">A</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Game;