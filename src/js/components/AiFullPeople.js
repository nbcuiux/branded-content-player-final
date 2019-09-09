import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullPeople extends Component {

	static propTypes = {
		show: PropTypes.bool,
		click: PropTypes.func,
		isFullScreen: PropTypes.bool
	}

	constructor(props) {
		super(props);
	
	}

	render() {

		const { show, click, isFullScreen, addAiStarred, checkAiStarred, removeAiStarred, data, peopleData, wikiaCharacters } = this.props;
			

		const numPeople = peopleData.length;
		const is5Column = isFullScreen || ((numPeople % 4 != 0) && ((numPeople % 4) < (numPeople % 5)));

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--people': true,
			'list-container--people-5-column': is5Column
		});

		

		const people = wikiaCharacters.map((person, index, key, type, image, title, subtitle, ctas) =>
			<div key={index} >
				<AiFullListItem
				peopleData={peopleData}
				wikiaCharacters={wikiaCharacters}
				type={"person"}
				click={() => click('character', person)}
				image={person.characterImage}
				title={person.characterName}
				subtitle={person.actorName}
				addAiStarred={()  => addAiStarred({key,type,image,title,subtitle,ctas} = {key: person.key, type: person.type, image: person.image, title: person.title, subtitle:person.subtitle, ctas:person.ctas})}
				removeAiStarred={() => removeAiStarred(person.key)}
				checkAiStarred={() => checkAiStarred(person.key)}
				/>
				<div className="list-column-inner"></div>
			</div>
		);	

		let empties;
 		(is5Column) ? 
 		(
			empties = (new Array(5 - (numPeople % 5)).fill('')).map((empty, index) =>
				<div key={index} >
					<div className="empty"></div>
					<div className="list-column-inner"></div>
				</div>
			)
 		) : 
 		(
 			(numPeople % 4 != 0) ? (
	 			empties = (new Array(4 - (numPeople % 4)).fill('')).map((empty, index) =>
					<div key={index}>
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
						{people}
						{empties}					
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}