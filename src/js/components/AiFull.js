import React, { Component, PropTypes } from 'react';
import AiFullScenes from './AiFullScenes';
import AiFullInScene from './AiFullInScene';
import AiFullPeople from './AiFullPeople';
import AiFullCharacter from './AiFullCharacter';
import AiFullMusic from './AiFullMusic';
import AiFullStarred from './AiFullStarred';
import AiFullTrivia from './AiFullTrivia';
import AiFullProducts from './AiFullProducts';

import classNames from "classnames";


export default class AiFull extends Component {

	static propTypes = {
		show: PropTypes.bool,
		close: PropTypes.func,
		showing: PropTypes.string,
		goToPage: PropTypes.func,
		showInScene: PropTypes.func,
		personData: PropTypes.object,
		starredData: PropTypes.array,
		inSceneData: PropTypes.array,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func,
		jumpToScene: PropTypes.func,
		currentTime: PropTypes.number,
	}

	constructor(props) {
		super(props);
	    this.state = {
	    	person: {}
	    };
	}

	loadCharacter = (e) => {
	    this.setState({
	    	person: e
	    });
	}

	render() {

		const { show, close, isFullScreen, showing, goToPage, showInScene, personData, starredData, inSceneData, addAiStarred, resetStarredItemState, checkAiStarred, removeAiStarred, currentTime, jumpToScene, fullAiCardShow, starredForScrolling, data, peopleData, sceneData, addShareData, fullAiShared, shareUrl, showButtons, shareButtonsShow, shareButtonsHide, wikiaCharacters } = this.props;


 		const classnames = classNames({
 			'ai-full': true,
 			'ai-full--show': show
 		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="navigation">
						<nav>
							<span>
								{ /* <i className="iconcss icon-vai"></i> */ }
								{ /* <svg viewBox="0 0 100 100">
								   <use xlinkHref='assets/img/vai.svg'></use>
								</svg> */ }
								{  <img src='assets/img/vai.svg'></img> }
							</span>
							<a className={(showing == 'scenes' || showing == 'in-scene') ? 'active' : null } onClick={ () => goToPage('scenes')}>Scenes</a>
							<a className={(showing == 'people' || showing == 'character') ? 'active' : null } onClick={() => goToPage('people')}>People</a>
							<a className={(showing == 'products') ? 'active' : null } onClick={() => goToPage('products')}>Products</a>
							<a className={(showing == 'music') ? 'active' : null } onClick={() => goToPage('music')}>Music</a>
							<a className={(showing == 'trivia') ? 'active' : null } onClick={() => goToPage('trivia')}>Trivia</a>
							<hr/>
							<a className={(showing == 'starred') ? 'active' : null } onClick={() => goToPage('starred')}>
								<i className="iconcss icon-star-fill"></i>
								Starred
							</a>
						</nav>
						<div className="close" onClick={ this.props.close }>
							<i className="iconcss icon-close"></i>
						</div>
					</div>
					<AiFullScenes
					wikiaCharacters={wikiaCharacters}
					sceneData={sceneData}
					data={data} 
					isFullScreen={ isFullScreen }
					starredForScrolling={starredForScrolling}
					starredData={starredData}
					show={ showing == 'scenes' }
					showInScene={showInScene}
					currentTime={currentTime}
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					{
					<AiFullInScene
					wikiaCharacters={wikiaCharacters}
					sceneData={sceneData}
					data={data} 
					fullAiCardShow={fullAiCardShow}
					starredForScrolling={starredForScrolling}
					starredData={starredData}
					click={ () => goToPage('scenes') }
					show={ showing == 'in-scene' }
					data={inSceneData}
					currentTime={currentTime}
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addStar={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeStar={removeAiStarred}
					/>
					}
					<AiFullPeople
					wikiaCharacters={wikiaCharacters}
					peopleData={peopleData}
					data={data}
					isFullScreen={ isFullScreen }
					show={ showing == 'people' }
					click={ goToPage }
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					{ personData != null ? (
					<AiFullCharacter
					wikiaCharacters={wikiaCharacters}
					peopleData={peopleData}
					data={data} 
					show={ showing == 'character' }
					click={ () => goToPage('people') }
					person={ personData }
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					fullAiCardShow={fullAiCardShow}
					/>
					) : null }
					<AiFullMusic
					data={data} 
					wikiaCharacters={wikiaCharacters}
					shareUrl={shareUrl}
					fullAiShared={fullAiShared}
					addShareData={addShareData}
					starredForScrolling={starredForScrolling}
					show={ showing == 'music' }
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					<AiFullStarred
					data={data} 
					wikiaCharacters={wikiaCharacters}
					shareUrl={shareUrl}
					fullAiShared={fullAiShared}
					addShareData={addShareData}
					fullAiCardShow={fullAiCardShow}
					isFullScreen={this.props.isFullScreen}
					show={ showing == 'starred' }
					data={ starredData }
					addStar={ addAiStarred }
					checkAiStarred={checkAiStarred}
					removeStar={ removeAiStarred }
					checkAiStarred={this.props.checkAiStarred}
					jumpToScene={this.props.jumpToScene}
				
					/>
					<AiFullTrivia
					wikiaCharacters={wikiaCharacters}
					data={data} 
					starredForScrolling={starredForScrolling}
					show={ showing == 'trivia' }
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
					/>
					<AiFullProducts
					wikiaCharacters={wikiaCharacters}
					showButtons={showButtons}
			        shareButtonsShow={(val) => this.props.shareButtonsShow(val)}
			        shareButtonsHide={shareButtonsHide}
					shareUrl={shareUrl}
					fullAiShared={fullAiShared}
					addShareData={addShareData}
					data={data} 
					starredForScrolling={starredForScrolling}
					show={ showing == 'products' }
					currentTime={currentTime}
					jumpToScene={this.props.jumpToScene}
					starredData={starredData}
					addAiStarred={addAiStarred}
					checkAiStarred={checkAiStarred}
					removeAiStarred={removeAiStarred}
				
					/>
				</div>
			</div>
		)
	}
}