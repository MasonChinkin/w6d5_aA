import React from 'react'
import Clock from './clock'
import Tabs from './tabs'
import Weather from './weather'

let data = [
	{ title: 'sexy', content: 'https://www.placecage.com/g/200/301' },
	{ title: 'crazy', content: 'https://www.placecage.com/c/200/302' },
	{ title: 'calm', content: "https://www.placecage.com/200/301" }
]

const Root = () => {
	return (
		<div>
			<Clock />

			<div className="tab-weather-cont">
				<Tabs tabsData={data} />
				<Weather />
			</div>
		</div>
	)
}

export default Root