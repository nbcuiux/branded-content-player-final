import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import AiSceneCard from './AiSceneCard';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		showInScene: PropTypes.func,
		isFullScreen: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
		
		}
	}

	render() {

		const { show, isFullScreen, showInScene, currentTime, jumpToScene, addAiStarred, checkAiStarred, removeAiStarred, starredData, starredForScrolling, data, sceneData, wikiaCharacters } = this.props;



		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--scenes': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2, 
		});

		const numScenes = this.props.sceneData.length;

		const scenes = sceneData.map((scene, index, key, type, image, title, subtitle, ctas) =>
			<div key={index} >
			<AiSceneCard
							data={data}
							sceneData={sceneData}
							wikiaCharacters={wikiaCharacters}
							currentTime={currentTime}
							showInScene={ () => showInScene(this.props.sceneData[index])}
							jumpToScene={this.props.jumpToScene}
							type={sceneData[index][0].type}
							image={sceneData[index][0].image}
							title={sceneData[index][0].title}
							subtitle={sceneData[index][0].subtitle}
							ctas={sceneData[index][0].ctas}
							addAiStarred={()  => addAiStarred({key:sceneData[index][0].key,type:sceneData[index][0].type,image:sceneData[index][0].image,title:sceneData[index][0].title,subtitle:sceneData[index][0].subtitle,ctas:sceneData[index][0].ctas})}
							removeAiStarred={() => removeAiStarred(sceneData[index][0].key)}
							checkAiStarred={() => checkAiStarred(sceneData[index][0].key)}
							/>
							<div className="list-column-inner"></div>
		</div>
		);	
	

 		let empties;
 		(isFullScreen) ? 
 		(
			empties = (new Array(3 - (numScenes % 3)).fill('')).map((empty, index) =>
				<div key={index} >
					<div className="empty"></div>
					<div className="list-column-inner"></div>
				</div>
			)
 		) : ( 
 			(numScenes % 2 != 0) ? (
	 			empties = (new Array(2 - (numScenes % 2)).fill('')).map((empty, index) =>
					<div key={index} >
						<div className="empty"></div>
						<div className="list-column-inner"></div>
					</div>
				)
			) : null
 		);
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						{scenes}

						{ empties }
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}