import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullMusic extends Component {

	static propTypes = {
		show: PropTypes.bool,
		jumpToSceneEight: PropTypes.func,
		jumpToSceneNine: PropTypes.func,
		jumpToSceneTen: PropTypes.func,
		
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data, addShareData, fullAiShared, shareUrl, wikiaCharacters  } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--music': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});


			const music = data.filter((obj) => obj.type == 'music').map((music, index, key, type, image, title, subtitle, ctas) =>
			<div key={index} >
				<AiFullListItem
						shareUrl={shareUrl}
						wikiaCharacters={wikiaCharacters}
				        fullAiShared={fullAiShared}
				        type={music.addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={music.addAiStarred.image}
						title={music.addAiStarred.title}
						subtitle={music.addAiStarred.subtitle}
						ctas={music.addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:music.addAiStarred.key,type:music.addAiStarred.type,image:music.addAiStarred.image,title:music.addAiStarred.title,subtitle:music.addAiStarred.subtitle,ctas:music.addAiStarred.ctas})}
						addShareData={() => addShareData({key:music.addAiStarred.key,type:music.addAiStarred.type,image:music.addAiStarred.image,title:music.addAiStarred.title,subtitle:music.addAiStarred.subtitle,ctas:music.addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(music.addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(music.addAiStarred.key)}
				/>
					<div className="list-column-inner"></div>
			</div>
			)

		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						{music}
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}