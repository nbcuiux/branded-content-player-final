import React, { Component, PropTypes } from 'react';
import TextTruncate from 'react-text-truncate';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export default class AiPreviewExpandingText extends Component {

	static propTypes = {
		bodyText: PropTypes.string
	}

	handleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked
		})
	}

	constructor(props) {
		super(props);
        this.state = {
        	isChecked: false
        }
	}

	render() {

		const { bodyText } = this.props;
 		
		return (
			(this.state.isChecked == false) ? (
				<TextTruncate 
				line={4} 
				truncateText="…"
				text={bodyText}
				textTruncateChild={<div onClick={this.handleChange} className="more"><i className="iconcss icon-caret-down"></i>More</div>}
				/>
			) : 
			(
				<div>
					<div>
						{bodyText}
					</div>
					<div onClick={this.handleChange} className="more"><i className="iconcss icon-caret-up"></i>Less</div>
				</div>
			)
		)
	}
}