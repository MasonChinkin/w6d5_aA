import React from 'react'

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedTabIdx: 0 };
	}

	render() {
		let i = this.state.selectedTabIdx
		let title = this.props.tabsData[i].title;
		let content = this.props.tabsData[i].content;
		return (
			<div className="tabs-widget">
				<h1 className="tab-title">Tabs</h1>
				<div className="tab-headers">
					<h1 onClick={clickTab}>{this.props.tabsData[0].title}</h1>
					<h1 onClick={clickTab}>{this.props.tabsData[1].title}</h1>
					<h1 onClick={clickTab}>{this.props.tabsData[2].title}</h1>

					{/* <h1>{this.props.tabsData[0].title}</h1>
                    <h1>{this.props.tabsData[1].title}</h1>
                    <h1>{this.props.tabsData[2].title}</h1> */}
				</div>
				<div className="tab-content">
					<img src={content} alt="" srcset="" />
				</div>
			</div>
		)
	}

	clickTab() {
	}
}

export default Tabs;

