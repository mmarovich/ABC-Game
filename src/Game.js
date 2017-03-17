import React, { Component } from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alphabets: alphabets,
			currentPosition: 0,
			currentTick: 0
		}

		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.playSound = this.playSound.bind(this);
	}

	componentDidUpdate() {
		this.playSound()
	}

	playSound() {
		let letterSound = document.querySelector('audio[data-key="letter"]');
		let wordSound = document.querySelector('audio[data-key="word"]');

		console.log(this.state.currentTick)

		if (this.state.currentTick === 0) {
			letterSound.currentTime = 0;
			letterSound.play();
		} else {
			wordSound.currentTime = 0;
			wordSound.play();
		}
	}

	next() {

		if(this.state.currentPosition === this.state.alphabets.length - 1 && this.state.currentTick === 2) {
			this.setState({currentPosition: 0, currentTick: 0})
		} else {
			if(this.state.currentTick < 2) {
				this.setState({currentTick: this.state.currentTick + 1})
			} else {
				this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0})
			}
		}
	}

	prev() {
		if(this.state.currentPosition === 0 && this.state.currentTick === 0) {
			this.setState({currentPosition: this.state.alphabets.length - 1, currentTick: 0})
		} else {
			if(this.state.currentTick > 0) {
				this.setState({currentTick: this.state.currentTick - 1})
			} else {
				this.setState({currentPosition: this.state.currentPosition - 1, currentTick: 0})
			}
		}
	}
	
	render() {
		let showImage = this.state.currentTick !== 0 ? true : false;
		let showWord = this.state.currentTick === 2 ? true : false;
		return(
			<div className="game">
				<div className="option">
					<div className="fields">
						<div className="field-block">
							{this.state.alphabets[this.state.currentPosition].letter}
						</div>
					</div>
					<audio src={this.state.alphabets[this.state.currentPosition].letterSound}
									data-key="letter" />
					<div className="buttons">
						<a onClick={this.prev} className="button prev">Previous</a>
						<a onClick={this.playSound} className="button sound">Play Sound Again</a>
						<a onClick={this.next} className="button next">Next</a>
					</div>
					<div className="fields">
						<div className="field-block">
							<div className="left-field">
								<div className={classNames('placeholder-span', {hide: showImage})}>Click Next to view Image</div>
								<img className={classNames('letter-image', {hide: !showImage})} 
								src={this.state.alphabets[this.state.currentPosition].image}
								alt={this.state.alphabets[this.state.currentPosition].word} />
								<audio src={this.state.alphabets[this.state.currentPosition].wordSound}
									data-key="word" />
							</div>
							<div className="right-field">
								<div className={classNames('placeholder-span', {hide: showWord})}>Click next to view image</div>
								<div className={classNames('word', {hide: !showWord})}>
									{this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Game;
