import React, { Component, PropTypes } from 'react';
import AiFullCtas from './AiFullCtas';
import AiFullStar from './AiFullStar';
import AiListStar from './AiListStar';
import AiFullExpandingText from './AiFullExpandingText';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiSceneCard extends Component {

	static propTypes = {
		type: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		quote: PropTypes.string,	
		image: PropTypes.string,
		ctas: PropTypes.array,
		addS: PropTypes.func,
		removeS: PropTypes.func,
		currentTime: PropTypes.number,
		jumpToScene: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	hideItem = () => {
		this.setState({
			hidingItem: true
		});
	}

	componentWillMount = () => {
		this.setState({
			hidingItem: false
		});
	}

	render() {

		const { type, image, title, subtitle, quote, ctas, addS, removeS, jumpToScene, showInScene, resetStarredItemState, currentTime, starredData, addAiStarred, checkAiStarred, removeAiStarred, click, fullAiCardShow, data } = this.props;

		const classnames = classNames({
 			'ai-preview-list-item': true,
 			'ai-preview-list-item--person': type == 'person',
 			'ai-preview-list-item--music': type == 'music',
 			'ai-preview-list-item--product': type == 'product',
 			'ai-preview-list-item--trivia': type == 'trivia',
 			'ai-preview-list-item--scene': type == 'scene',
 			'ai-preview-list-item--hiding-item': this.state.hidingItem
 		});

 		const iconClassname = classNames({
 			'iconcss': true,
 			'icon-person': type == 'person',
 			'icon-music': type == 'music',
 			'icon-product': type == 'product',
 			'icon-trivia': type == 'trivia',
 			'icon-scene': type == 'scene'
 		});
 		
		return (
			<div className={classnames}>
				<div className="mask">
					<img src={image} ></img>
					<div className="scene-card">
						<div className="scene-top" onClick={() => showInScene()}>
							<i className={iconClassname}></i>
						</div>
						<div className="scene-bottom">
							<div className="text"  onClick={() => showInScene()}>
								<h2>
									<span>{title}</span>
								</h2>
								<h3>
									<span>{subtitle}</span>
								</h3>
							</div>
							<AiFullStar
							add={ addS }
							remove={ removeS }
							hideParent={ this.hideItem }
							/>
							<AiListStar
							checkAiStarred={checkAiStarred}
							addAiStarred={addAiStarred}
							removeAiStarred={removeAiStarred }
							/>
							<AiFullCtas
							currentTime={currentTime} 
							fullAiCardShow={fullAiCardShow}
							jumpToScene={this.props.jumpToScene}
							ctas={ctas}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}