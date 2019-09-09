import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullProducts extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		jumpToSceneFive: PropTypes.func,
		jumpToSceneSix: PropTypes.func,
		jumpToSceneSeven: PropTypes.func,
	
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, jumpToScene, starredData, addAiStarred, checkAiStarred, removeAiStarred, starredForScrolling, data, addShareData, fullAiShared, shareUrl, shareButtonsHide, shareButtonsShow, showButtons, wikiaCharacters } = this.props;


		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--products': true,
			'list-container--needs-scroll': this.props.starredForScrolling.length > 2
		});

		const products = data.filter((obj) => obj.type == 'product').map((product, index, key, type, image, title, subtitle, ctas) =>
			<div key={index} >
				<AiFullListItem
				        data={data}
				        shareUrl={shareUrl}
				        wikiaCharacters={wikiaCharacters}
				        fullAiShared={fullAiShared}
				        showButtons={showButtons}
			            shareButtonsShow={(val) => this.props.shareButtonsShow(val)}
			            shareButtonsHide={shareButtonsHide}
				        type={product.addAiStarred.type}
						jumpToScene={this.props.jumpToScene}
						image={product.addAiStarred.image}
						title={product.addAiStarred.title}
						subtitle={product.addAiStarred.subtitle}
						ctas={product.addAiStarred.ctas}
						addAiStarred={() => addAiStarred({key:product.addAiStarred.key,type:product.addAiStarred.type,image:product.addAiStarred.image,title:product.addAiStarred.title,subtitle:product.addAiStarred.subtitle,ctas:product.addAiStarred.ctas})}
						addShareData={() => addShareData({key:product.addAiStarred.key,type:product.addAiStarred.type,image:product.addAiStarred.image,title:product.addAiStarred.title,subtitle:product.addAiStarred.subtitle,ctas:product.addAiStarred.ctas})}
						removeAiStarred={() => removeAiStarred(product.addAiStarred.key)}
						checkAiStarred={() => checkAiStarred(product.addAiStarred.key)}
				/>
					<div className="list-column-inner"></div>
			</div>
			)
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						{products}
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}