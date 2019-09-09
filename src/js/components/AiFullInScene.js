import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		addStar: PropTypes.func,
		removeStar: PropTypes.func,
		jumpToSceneOne: PropTypes.func,
		jumpToSceneTwo: PropTypes.func,
		jumpToSceneThree: PropTypes.func,
		jumpToSceneFour: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			collapsePeople: false,
			collapseProducts: false,
			collapseMusic: false,
			collapseTrivia: false	
		}
	}

	handleCollapsePeople = () => {
		this.setState({
			collapsePeople: !this.state.collapsePeople
		})
	}

	handleCollapseProducts = () => {
		this.setState({
			collapseProducts: !this.state.collapseProducts
		})
	}

	handleCollapseMusic = () => {
		this.setState({
			collapseMusic: !this.state.collapseMusic
		})
	}

	handleCollapseTrivia = () => {
		this.setState({
			collapseTrivia: !this.state.collapseTrivia
		})
	}

	render() {

		const { show, currentTime, fullAiCardShow, data, click, jumpToScene, addStar, removeStar, checkAiStarred, starredData, starredForScrolling, wikiaCharacters } = this.props;

	

		const products = data
			.filter((obj) =>
				obj.type == 'product'
			)
			.map((sceneItem, index, key,type,image,title,subtitle,ctas) =>
				<div key={index}>
					<AiFullListItem
					wikiaCharacters={wikiaCharacters}
					fullAiCardShow={fullAiCardShow}
					type={sceneItem.type}
					image={sceneItem.image}
					title={sceneItem.title}
					subtitle={sceneItem.subtitle}
					ctas={sceneItem.ctas}
					addS={() => addStar(sceneItem)}
					removeS={() => removeStar(sceneItem.key)}
					addAiStarred={()  => addStar({key,type,image,title,subtitle,ctas} = {key: sceneItem.key, type: sceneItem.type, image: sceneItem.image, title: sceneItem.title, subtitle:sceneItem.subtitle, ctas:sceneItem.ctas})}
			        removeAiStarred={() => removeStar(sceneItem.key)}
			        checkAiStarred={() => checkAiStarred(sceneItem.key)}
					jumpToScene={this.props.jumpToScene}
					/>
				</div>
		);

		const people = 
			data
			.filter((obj) =>
				 obj.type == 'person'
			)
			.map((sceneItem, index, key,type,image,title,subtitle,ctas) =>
				<div key={index}>
					<AiFullListItem
					wikiaCharacters={wikiaCharacters}
					fullAiCardShow={fullAiCardShow}
					type={sceneItem.type}
					image={sceneItem.image}
					title={sceneItem.title}
					subtitle={sceneItem.subtitle}
					ctas={sceneItem.ctas}
					addS={() => addStar(sceneItem)}
					removeS={() => removeStar(sceneItem.key)}
					addAiStarred={()  => addStar({key,type,image,title,subtitle,ctas} = {key: sceneItem.key, type: sceneItem.type, image: sceneItem.image, title: sceneItem.title, subtitle:sceneItem.subtitle, ctas:sceneItem.ctas})}
			        removeAiStarred={() => removeStar(sceneItem.key)}
			        checkAiStarred={() => checkAiStarred(sceneItem.key)}
					jumpToScene={this.props.jumpToScene}
					/>
				</div>
		);

		const music = 
			data
			.filter((obj) =>
				obj.type == 'music'
			)
			.map((sceneItem, index, key,type,image,title,subtitle,ctas) =>
				<div key={index}>
					<AiFullListItem
					fullAiCardShow={fullAiCardShow}
					type={sceneItem.type}
					image={sceneItem.image}
					title={sceneItem.title}
					subtitle={sceneItem.subtitle}
					ctas={sceneItem.ctas}
					addS={() => addStar(sceneItem)}
					removeS={() => removeStar(sceneItem.key)}
					addAiStarred={()  => addStar({key,type,image,title,subtitle,ctas} = {key: sceneItem.key, type: sceneItem.type, image: sceneItem.image, title: sceneItem.title, subtitle:sceneItem.subtitle, ctas:sceneItem.ctas})}
			        removeAiStarred={() => removeStar(sceneItem.key)}
			        checkAiStarred={() => checkAiStarred(sceneItem.key)}
					jumpToScene={this.props.jumpToScene}
					/>
				</div>
		);

	const trivia = 
	data
	.filter((obj) =>
		obj.type == 'trivia'
	)
	.map((sceneItem, index, key,type,image,title,subtitle,ctas) =>
		<div key={index}>
			<AiFullListItem
			fullAiCardShow={fullAiCardShow}
			type={sceneItem.type}
			image={sceneItem.image}
			title={sceneItem.title}
			subtitle={sceneItem.subtitle}
			quote={sceneItem.quote}
			ctas={sceneItem.ctas}
		addS={() => addStar(sceneItem)}
					removeS={() => removeStar(sceneItem.key)}
					addAiStarred={()  => addStar({key,type,image,title,subtitle,ctas} = {key: sceneItem.key, type: sceneItem.type, image: sceneItem.image, title: sceneItem.title, subtitle:sceneItem.subtitle, ctas:sceneItem.ctas})}
			        removeAiStarred={() => removeStar(sceneItem.key)}
			        checkAiStarred={() => checkAiStarred(sceneItem.key)}
			jumpToScene={this.props.jumpToScene}
			/>
		</div>
);

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--in-scene': true,
			'list-container--needs-scroll': !this.state.collapsePeople || !this.state.collapseProducts || (music.length != 0 && !this.state.collapseMusic) || (trivia.length != 0 && !this.state.collapseTrivia)
		});

		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<div className="in-scene-header">
							<a onClick={() => click()}><i className="iconcss icon-caret-left"></i><span>All Scenes</span></a>
						</div>

						<div className="in-scene-header">
							<h3>People<span>({people.length})</span></h3>
							<i className={ this.state.collapsePeople ? 'iconcss icon-caret-up-thin' : 'iconcss icon-caret-down-thin'} onClick={ this.handleCollapsePeople }></i>
						</div>
						{ this.state.collapsePeople ? null : people }

						<div className="in-scene-header">
							<h3>Products<span>({products.length})</span></h3>
							<i className={ this.state.collapseProducts ? 'iconcss icon-caret-up-thin' : 'iconcss icon-caret-down-thin'} onClick={ this.handleCollapseProducts }></i>
						</div>
						{ this.state.collapseProducts ? null : products }

						<div className="in-scene-header" style={ trivia.length > 0 ? null : {display: 'none'} }>
							<h3>Music<span>({music.length})</span></h3>
							<i className={ this.state.collapseMusic ? 'iconcss icon-caret-up-thin' : 'iconcss icon-caret-down-thin'} onClick={ this.handleCollapseMusic }></i>
						</div>
						{ this.state.collapseMusic ? null : music }

						<div className="in-scene-header" style={ trivia.length > 0 ? null : {display: 'none'} }>
							<h3>Trivia<span>({trivia.length})</span></h3>
							<i className={ this.state.collapseTrivia ? 'iconcss icon-caret-up-thin' : 'iconcss icon-caret-down-thin'} onClick={ this.handleCollapseTrivia }></i>
						</div>
						{ this.state.collapseTrivia ? null : trivia }

					</div>
					<div className="list-column"></div>
				</div>
			</div>
			)
	}
}