import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullSlider extends Component {

	static propTypes = {
		otherWorks: PropTypes.array
	}

	constructor() {
		super();
	}

	render() {
		const { otherWorks } = this.props;
		let cards;
		

		console.log(otherWorks)

		if (this.props.otherWorks) {
			cards = otherWorks.map((otherWork, index) =>
			<div className="rotten-wrapper" key={index} >
				<a className="mask" href={otherWork.link} target="_blank">
					<img src={otherWork.image}></img>
				</a>

				<div className="rotten">
				<div className="score-wrapper">
				<img src={otherWork.rottenaudience}></img><span>{otherWork.rottenaudienceScore}</span>
				</div>
				<div className="score-wrapper">
				<img  src={otherWork.tomatometer}></img><span>{otherWork.tomatometerScore}</span>
				</div>
			    </div>
			</div>
	
			);
		}

		return (
			<div className="slider">
			
				{cards}	
			</div>
		)
	}
}