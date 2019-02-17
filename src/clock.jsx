import React from 'react'

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date() };
		this.intervalID = null;

		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.intervalID = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
		this.intervalID = null;
	}

	render() {
		let time = this.state.time.toLocaleTimeString();
		let date = this.state.time.toDateString();
		return (
			<div className="clock-widget">
				<h1 className="clock-title">Nicolas Clock</h1>
				<div className="clock">
					<div className="clock-time">
						<h2>Time</h2>
						<h2>{time}</h2>
					</div>
					<div className="clock-date">
						<h2>Date</h2>
						<h2>{date}</h2>
					</div>
				</div>
			</div>
		)
	}

	tick() {
		let seconds = this.state.time.getSeconds();
		this.state.time.setSeconds(seconds + 1);
		this.setState(
			this.state
		)
	}
}

export default Clock