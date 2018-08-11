import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			clicked: 0
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			clicked: this.state.clicked + 1
		});
	}

	render() {
		return (
			<div>
				<h1>Clicked: {this.state.clicked}</h1>
				<button onClick={this.onClick}>Click me!</button>
			</div>
		);
	}
}

export default hot(module)(App);
