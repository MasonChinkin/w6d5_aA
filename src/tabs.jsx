import React from 'react'

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedTabIdx: 0 };

		this.clickTab = this.clickTab.bind(this);
	}

	render() {
		let i = this.state.selectedTabIdx
		let content = this.props.tabsData[i].content;
		return (
			<div className="tabs-widget">
				<h1 className="tab-title">Tabs</h1>
				<div className="tab-headers">
					<h1 onClick={() => this.clickTab(0)}>{this.props.tabsData[0].title}</h1>
					<h1 onClick={() => this.clickTab(1)}>{this.props.tabsData[1].title}</h1>
					<h1 onClick={() => this.clickTab(2)}>{this.props.tabsData[2].title}</h1>
				</div>
				<div className="tab-content">
					<img src={content} />
				</div>
			</div>
		)
	}

	clickTab(key) {
		this.setState({ selectedTabIdx: key })
	}
}

