import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiFullStarred extends Component {

	static propTypes = {
		show: PropTypes.bool,
		addStar: PropTypes.func,
		removeStar: PropTypes.func,
		jumpToSceneFourteen: PropTypes.func,
		jumpToSceneFifteen: PropTypes.func,
		jumpToSceneSixteen: PropTypes.func,
		jumpToSceneSeventeen: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, isFullScreen, data, addStar, removeStar, checkAiStarred, jumpToScene, fullAiCardShow, addShareData, fullAiShared, shareUrl, wikiaCharacters } = this.props;

		let starredList;
		
	

		if (this.props.data.length > 0) {
			starredList = data.map((starredItem, index) =>
				<div key={index}>
					<AiFullListItem
					fullAiCardShow={fullAiCardShow}
					wikiaCharacters={wikiaCharacters}
					shareUrl={shareUrl}
				    fullAiShared={fullAiShared}
					type={starredItem.type}
					image={starredItem.image}
					title={starredItem.title}
					subtitle={starredItem.subtitle}
					ctas={starredItem.ctas}
					addS={() => addStar(starredItem)}
					removeS={() => removeStar(starredItem.key)}
					checkAiStarred={this.props.checkAiStarred}
					addShareData={() => addShareData({key:starredItem.key,type:starredItem.type,image:starredItem.image,title:starredItem.title,subtitle:starredItem.subtitle,ctas:starredItem.ctas})}
					jumpToScene={this.props.jumpToScene}
					/>
				</div>
			);
		} else {
			starredList = (
			<div className="empty-state">
				<i className="iconcss icon-empty-state"></i>
				<h2>You haven't starred anything yet. <br></br> Get to starrin'!</h2>
			</div>);
		}




		// console.log(starredList);

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--starred': true,
			'list-container--needs-scroll': this.props.data.length > 1, 
			'list-container--fullscreen': (this.props.data.length > 5 && isFullScreen)
		});
 		
		return (
			<div className={classnames}>
				<div className="list-column"></div>
				<div className="list-scrolling">
					{ starredList }
				</div> 
				<div className="list-column"></div>
			</div>
		)
	}
}