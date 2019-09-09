import React, { Component, PropTypes } from 'react';
import AiPreviewStar from './AiPreviewStar';
import AiPreviewExpandingText from './AiPreviewExpandingText';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiPreviewListItem extends Component {

	static propTypes = {
		type: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		image: PropTypes.string,
		onclick: PropTypes.func,
		addStar: PropTypes.func,
		removeStar: PropTypes.func,
		isStarred: PropTypes.func
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { type, image, title, subtitle, onclick, addStar, removeStar, isStarred } = this.props;

		const classnames = classNames({
 			'ai-preview-list-item': true,
 			'ai-preview-list-item--person': type == 'person',
 			'ai-preview-list-item--music': type == 'music',
 			'ai-preview-list-item--product': type == 'product',
 			'ai-preview-list-item--trivia': type == 'trivia'
 		});

 		const iconClassname = classNames({
 			'iconcss': true,
 			'icon-person': type == 'person',
 			'icon-music': type == 'music',
 			'icon-product': type == 'product',
 			'icon-trivia': type == 'trivia'
 		});
 		
		return (
			(type != 'trivia') ? (
				<div className={classnames} >
					<div className="mask" onClick={() => { onclick() }}>
						<img src={image}></img>
					</div>
					<div className="text" onClick={() => { onclick() }}>
						<h2>
							<i className={iconClassname}></i>
							<span>{title}</span>
						</h2>
						<h3>
							<span>{subtitle}</span>
						</h3>
					</div>
					<AiPreviewStar
					starred={isStarred}
					add={addStar}
					remove={removeStar}
					/>
				</div>
			) 
			:
			( 
				<div className={classnames}>
					<div className="mask" onClick={() => { onclick() }}>
						<img src={image}></img>
					</div>
					<div className="text">
						<h2 onClick={() => { onclick() }}>
							<i className={iconClassname}></i>
							{title}
						</h2>
						<h3>
							<AiPreviewExpandingText 
							bodyText={subtitle} 
							/>
						</h3>
					</div>
				</div>
			)
		)
	}
}