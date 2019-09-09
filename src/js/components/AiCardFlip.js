import React, { Component, PropTypes } from 'react';
import AiFullCtas from './AiFullCtas';
import AiPreviewStar from './AiPreviewStar';
import AiListStar from './AiListStar';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiCardFlip extends Component {

	static propTypes = {
		frontImg: PropTypes.string,
		backImg: PropTypes.string,
		flipped: PropTypes.bool,
		flip: PropTypes.func
	}

	constructor() {
		super();
	}

	render() {
		const { frontImg, backImg, flipped, flip, show, click, person, addAiStarred, checkAiStarred, removeAiStarred, data,  ctas, addS, removeS, jumpToScene, fullAiCardShow } = this.props;
		const classnames = classNames({
			'flip-container': true,
			'flip-container--flipped': flipped
		});

		return (
			<div className={classnames} >
			
				<div className="flipper">

					<div className="front">
					            <AiPreviewStar
					            add={()  => addAiStarred({key: person.key, type: person.type, image: person.image, title: person.title, subtitle:person.subtitle, ctas:person.ctas})}
				                remove={() => removeAiStarred(person.key)}
				                starred={() => checkAiStarred(person.key)}
					            />
						<div className="mask" onClick={flip}>
							<img src={frontImg}></img>
							<a>
								<i className="iconcss icon-swap"></i>
								<span>View Actor</span>
								
							</a>
						</div>
					</div>
					<div className="back">
					            <AiPreviewStar
					            add={()  => addAiStarred({key: person.key, type: person.type, image: person.image, title: person.title, subtitle:person.subtitle, ctas:person.ctas})}
				                remove={() => removeAiStarred(person.key)}
				                starred={() => checkAiStarred(person.key)}
					            />
						<div className="mask" onClick={flip}>
							<img src={backImg}></img>
							<a>
								<i className="iconcss icon-swap"></i>
								<span>View Character</span>
								
							</a>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}