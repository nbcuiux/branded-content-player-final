import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiFullTrivia extends Component {

	static propTypes = {
		show: PropTypes.bool,
		jumpToSceneEleven: PropTypes.func,
		jumpToSceneTwelve: PropTypes.func,
		jumpToSceneThirteen: PropTypes.func,
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data, wikiaCharacters} = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--trivia': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});

		const trivia = data.filter((obj) => obj.type == 'trivia').map((trivia, index, key, type, image, title, subtitle, ctas, quote) =>
			<div key={index} >
				<AiFullListItem
				        type={trivia.addAiStarred.type}
				        wikiaCharacters={wikiaCharacters}
						jumpToScene={this.props.jumpToScene}
						image={trivia.addAiStarred.image}
						title={trivia.addAiStarred.title}
						subtitle={trivia.addAiStarred.subtitle}
						ctas={trivia.addAiStarred.ctas}
						quote={trivia.addAiStarred.quote}
						addAiStarred={() => addAiStarred({key:trivia.addAiStarred.key,type:trivia.addAiStarred.type,image:trivia.addAiStarred.image,title:trivia.addAiStarred.title,subtitle:trivia.addAiStarred.subtitle,ctas:trivia.addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(trivia.addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(trivia.addAiStarred.key)}
				/>
					<div className="list-column-inner"></div>
			</div>
			)
 		
		return (
			<div className={classnames}>
				<div className="list-column"></div>
				<div className="list-scrolling">
					{trivia}
				</div>
				<div className="list-column"></div>
			</div>
		)
	}
}