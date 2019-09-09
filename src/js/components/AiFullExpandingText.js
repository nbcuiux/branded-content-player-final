import React, { Component, PropTypes } from 'react';
import TextTruncate from 'react-text-truncate';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export default class AiFullExpandingText extends Component {

	static propTypes = {
		bodyText: PropTypes.string,
		flipped: PropTypes.bool,	
		numLines: PropTypes.number
	}

	toggleExpanded = () => {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	handleFlip = () => {
		this.setState({
			flipped: !this.state.flipped,
			isExpanded: false
		})
	}

	constructor(props) {
		super(props);
        this.state = {
        	isExpanded: false,
        	flipped: false
        }
	}

	// componentWillMount() {
	// 	if ( this.state.flipped != this.props.flipped) {
	// 		this.handleFlip();
	// 	}
	// }

	isTruncated = () => {
		return this.props.bodyText.length > 200
	}

	render() {

		const { bodyText, flipped, numLines } = this.props;

		if ( (flipped != null) && (this.state.flipped != flipped) ) {
			this.handleFlip();
		}

		return (
			(!this.state.isExpanded) ? (
				<TextTruncate 
				line={numLines} 
				truncateText="…"
				text={bodyText}
				textTruncateChild={<div onClick={this.toggleExpanded} className="more"><i className="iconcss icon-caret-down"></i>More</div>}
				/>
			) : 
			(
				<div>
					<div>
						{bodyText}
					</div>
					{ this.isTruncated() ? (<div onClick={this.toggleExpanded} className="more"><i className="iconcss icon-caret-up"></i>Less</div>) : null }
				</div>
			)
		)
	}
}