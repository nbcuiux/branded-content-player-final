import React, { Component, PropTypes } from 'react';
import AiFullCtas from './AiFullCtas';
import AiFullStar from './AiFullStar';
import AiListStar from './AiListStar';
import ShareItemCard from './ShareItemCard';
import AiFullExpandingText from './AiFullExpandingText';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiFullListItem extends Component {

	static propTypes = {
		type: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		quote: PropTypes.string,	
		image: PropTypes.string,
		ctas: PropTypes.array,
		addS: PropTypes.func,
		removeS: PropTypes.func,
		addAiStarred: PropTypes.func,
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

		const { type, image, title, subtitle, quote, ctas, addS, removeS, jumpToScene, resetStarredItemState, currentTime, starredData, addAiStarred, checkAiStarred, removeAiStarred, click, fullAiCardShow, peopleData, data, addShareData, fullAiShared, shareUrl, showButtons, shareButtonsShow, shareButtonsHide, wikiaCharacters } = this.props;


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
			(type != 'trivia') ? (
				<div className={classnames}>
					<div className="mask" onClick={()=>click()}>
						<img src={image}></img>
					</div>
					<div className="text" onClick={()=>click()}>
						<h2>
							<i className={iconClassname}></i>
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
					<ShareItemCard
					data={data}
					shareUrl={shareUrl}
					fullAiShared={fullAiShared}
					addShareData={addShareData}
					showButtons={showButtons}
			        shareButtonsShow={(val) => this.props.shareButtonsShow(val)}
			        shareButtonsHide={shareButtonsHide}
					checkAiStarred={checkAiStarred}
					addAiStarred={addAiStarred}
					removeAiStarred={removeAiStarred }
					currentTime={currentTime} 
					fullAiCardShow={fullAiCardShow}
					jumpToScene={this.props.jumpToScene}
					ctas={ctas}/>

					<AiFullCtas
					wikiaCharacters={wikiaCharacters}
					currentTime={currentTime} 
					fullAiCardShow={fullAiCardShow}
					jumpToScene={this.props.jumpToScene}
					ctas={ctas}
					/>
					
				</div>
			) 
			:
			( 
				<div className={classnames}>
					<div className="mask" onClick={()=>click()}>
						<img src={image}></img>
					</div>
					<div className="text" onClick={()=>click()}>
						<h2>
							<i className={iconClassname}></i>
							<span>{title}</span>
						</h2>
						<h3>{subtitle}</h3>
						<AiFullExpandingText 
						bodyText={quote}
						numLines={ 3 }
						/>
					</div>
					
					<AiFullCtas 
					ctas={ctas}
					wikiaCharacters={wikiaCharacters}
					currentTime={currentTime}
					fullAiCardShow={fullAiCardShow}
					jumpToScene={this.props.jumpToScene}
					/>
				</div>
			)
		)
	}
}