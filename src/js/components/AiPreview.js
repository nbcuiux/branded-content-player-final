import React, { Component, PropTypes } from 'react';
import AiPreviewStar from './AiPreviewStar';
import AiPreviewListItem from './AiPreviewListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";


export default class AiPreview extends Component {

	static propTypes = {
		show: PropTypes.bool,
		onClick: PropTypes.func,
		mode: PropTypes.string,
		pauseCardSrc: PropTypes.bool,
		data: PropTypes.array,
		glasses: PropTypes.bool,
		actor: PropTypes.bool,
		actress: PropTypes.bool,
		sound: PropTypes.bool,
		trivia: PropTypes.bool,
		triviaGeneral: PropTypes.bool,
		triviaFun: PropTypes.bool,
		item8: PropTypes.bool,
		item9: PropTypes.bool,
		item10: PropTypes.bool,
		item11: PropTypes.bool,
		item12: PropTypes.bool,
		item13: PropTypes.bool,
		item14: PropTypes.bool,
		item15: PropTypes.bool,
		item16: PropTypes.bool,
		item17: PropTypes.bool,
		item18: PropTypes.bool,
		item19: PropTypes.bool,
		item20: PropTypes.bool,
		currentTime: PropTypes.number,
		fullAiCardShow: PropTypes.func,
		showFullAiCard: PropTypes.bool,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func,
		checkAiStarred: PropTypes.func
	}

	
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false
		}
		this.detectOrientationChange();
	}

	onMouseOver = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: true
		})
		this.mouseMoveTimeout = setTimeout(()=> {
			this.setState({
				isHovering: false
			});
		}, 24000);
	}

	onMouseOut = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: false
		})
	}

	isMobile = () => {
		return !((
			navigator.userAgent.match(/iPhone/i) || 
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) || 
			navigator.userAgent.match(/iPad/i) || 
			navigator.userAgent.match(/iPod/i) || 
			navigator.userAgent.match(/BlackBerry/i) || 
			navigator.userAgent.match(/Windows Phone/i)
		) == null )
	}

	detectOrientationChange = () => {
		window.addEventListener("orientationchange", function() {
			console.log("onorientationchange");
        }, false);
	}

	render() {

		let listHeight = 0;

        if (this.refs.list) {
	      listHeight = this.refs.list.clientHeight;   
        }

        let isLandscape = false;
        // screen.orientation.lock('landscape');

		((window.matchMedia('(orientation: landscape)')).matches && this.isMobile()) ? isLandscape = true : null;

		// console.log(isLandscape);

		const { show, isFullScreen, currentTime, endCardShow, pauseCardSrc, data, glasses, actor, actress, sound, trivia, triviaGeneral, triviaFun, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, fullAiCardShow, showFullAiCard, addAiStarred, removeAiStarred, checkAiStarred, wikiaCharacters} = this.props;
		const { isHovering } = this.state;
		
		
 		const classnames = classNames({
 			'ai-preview': true,
 			'ai-preview--show': show || (isHovering && currentTime != 0 && !showFullAiCard && endCardShow),
 			'ai-preview--needs-scrolling': (isFullScreen && window.innerWidth > 1824) ? listHeight >= 880 : listHeight >= 510,
 			'ai-preview--needs-scrolling-touch': isLandscape ? listHeight >= 400 : false
 		});

 		const itemCar = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': pauseCardSrc
 		});

 		const itemGlasses = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': glasses
 		});

 		const itemActor = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': actor
 		});

 		const itemActress = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': actress
 		});

 		const itemSound = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': sound
 		});

 		const itemTrivia = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': trivia
 		});

 		const itemTriviaGeneral = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': triviaGeneral,
 		});

 		const itemTriviaFun = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': triviaFun
 		});

 		const item8ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item8
 		});

 		const item9ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item9
 		});

 		const item10ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item10
 		});

 		const item11ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item11
 		});

 		const item12ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item12
 		});

 		const item13ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item13
 		});

 		const item14ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item14
 		});

 		const item15ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item15
 		});

 		const item16ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item16
 		});

 		const item17ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item17
 		});

 		const item18ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item18
 		});

 		const item19ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item19
 		});

 		const item20ClassName = classNames({
 			'ai-list-item': true,
 			'ai-list-item--show': item20
 		});

 		
		return (
			<div>
				<div className={classnames} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
					<div className="ai-more" onClick={ () => fullAiCardShow('scenes') }>
						<div className="divider"></div>
						<span>More</span>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
					</div>
					<input id="toggleWikiPreview" type="checkbox" defaultChecked="true"/>
					<label htmlFor="toggleWikiPreview" className="">
						<div className="slit">
							<span>Vai</span>
						</div>
						<div className="circle"></div>
					</label>
					<div className="ai-preview-list">
						<div className="ai-preview-list-column"></div>
						<div className="ai-preview-list-scrolling" ref="list">

						 {/* Trivia Scene 5*/}
					    <div className={item17ClassName}>
							<AiPreviewListItem
							type={data[17].type}
							image={data[17].src}
							title={data[17].title}
							subtitle={data[17].subtitle}
							onclick={() => fullAiCardShow(data[17].fullAiCardShowType, data[17].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[17].addAiStarred.key,type:data[17].addAiStarred.type,image:data[17].addAiStarred.image,title:data[17].addAiStarred.title,subtitle:data[17].addAiStarred.subtitle,ctas:data[17].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[17].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[17].addAiStarred.key)}
							/>
						</div>
                          
           	            {/* mr. Robot*/}

						<div className={item16ClassName}> 
						   <AiPreviewListItem
							type={data[16].type}
							image={data[16].src}
							title={data[16].title}
							subtitle={data[16].subtitle}
							onclick={() => fullAiCardShow(data[16].fullAiCardShowType, data[16].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[16].addAiStarred.key,type:data[16].addAiStarred.type,image:data[16].addAiStarred.image,title:data[16].addAiStarred.title,subtitle:data[16].addAiStarred.subtitle,ctas:data[16].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[16].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[16].addAiStarred.key)}
							/>
						</div>
						
						 {/* Rami last scene*/}

						<div className={item18ClassName}>
							<AiPreviewListItem
							type={data[18].type}
							image={data[18].src}
							title={data[18].title}
							subtitle={data[18].subtitle}
							onclick={() => fullAiCardShow(data[18].fullAiCardShowType, data[18].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[18].addAiStarred.key,type:data[18].addAiStarred.type,image:data[18].addAiStarred.image,title:data[18].addAiStarred.title,subtitle:data[18].addAiStarred.subtitle,ctas:data[18].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[18].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[18].addAiStarred.key)}
							/>
						</div>

						{/* Trivia Scene 4*/}
						<div className={item11ClassName}>
							<AiPreviewListItem
							type={data[11].type}
							title={data[11].title}
							subtitle={data[11].subtitle}
							onclick={() => fullAiCardShow(data[11].fullAiCardShowType, data[11].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[11].addAiStarred.key,type:data[11].addAiStarred.type,image:data[11].addAiStarred.image,title:data[11].addAiStarred.title,subtitle:data[11].addAiStarred.subtitle,ctas:data[11].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[11].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[11].addAiStarred.key)}
							/>
						</div>

						 {/* Angela Moss*/}

						<div className={item8ClassName}>
						   <AiPreviewListItem
							type={data[8].type}
							image={data[8].src}
							title={data[8].title}
							subtitle={data[8].subtitle}
							onclick={() => fullAiCardShow(data[8].fullAiCardShowType, data[8].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[8].addAiStarred.key,type:data[8].addAiStarred.type,image:data[8].addAiStarred.image,title:data[8].addAiStarred.title,subtitle:data[8].addAiStarred.subtitle,ctas:data[8].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[8].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[8].addAiStarred.key)}
							/>
						</div>

						 {/* Seller */}

						<div className={item8ClassName}>
						   <AiPreviewListItem
							type={data[20].type}
							image={data[20].src}
							title={data[20].title}
							subtitle={data[20].subtitle}
							onclick={() => fullAiCardShow(data[20].fullAiCardShowType, data[20].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[20].addAiStarred.key,type:data[20].addAiStarred.type,image:data[20].addAiStarred.image,title:data[20].addAiStarred.title,subtitle:data[20].addAiStarred.subtitle,ctas:data[20].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[20].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[20].addAiStarred.key)}
							/>
						</div>

					    {/* Shoes*/}

						<div className={item15ClassName}>
							<AiPreviewListItem
							type={data[15].type}
							image={data[15].src}
							title={data[15].title}
							subtitle={data[15].subtitle}
							onclick={() => fullAiCardShow(data[15].fullAiCardShowType, data[15].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[15].addAiStarred.key,type:data[15].addAiStarred.type,image:data[15].addAiStarred.image,title:data[15].addAiStarred.title,subtitle:data[15].addAiStarred.subtitle,ctas:data[15].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[15].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[15].addAiStarred.key)}
							/>
						</div>
						
					    {/* Glasses */}

						<div className={itemGlasses}>
							<AiPreviewListItem
							type={data[0].type}
							image={data[0].src}
							title={data[0].title}
							subtitle={data[0].subtitle}
							onclick={() => fullAiCardShow(data[0].fullAiCardShowType, data[0].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[0].addAiStarred.key,type:data[0].addAiStarred.type,image:data[0].addAiStarred.image,title:data[0].addAiStarred.title,subtitle:data[0].addAiStarred.subtitle,ctas:data[0].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[0].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[0].addAiStarred.key)}
							/>
						</div>

						 {/* Trivia Scene 3*/}
						<div className={itemTrivia}>
							<AiPreviewListItem
							type={data[7].type}
							image={data[7].src}
							title={data[7].title}
							subtitle={data[7].subtitle}
							onclick={() => fullAiCardShow(data[7].fullAiCardShowType, data[7].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[7].addAiStarred.key,type:data[7].addAiStarred.type,image:data[7].addAiStarred.image,title:data[7].addAiStarred.title,subtitle:data[7].addAiStarred.subtitle,ctas:data[7].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[7].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[7].addAiStarred.key)}
							/>
						</div>

					    {/* Mobley */}

						<div className={item13ClassName}>
							<AiPreviewListItem
							type={data[13].type}
							image={data[13].src}
							title={data[13].title}
							subtitle={data[13].subtitle}
							onclick={() => fullAiCardShow(data[13].fullAiCardShowType, data[13].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[13].addAiStarred.key,type:data[13].addAiStarred.type,image:data[13].addAiStarred.image,title:data[13].addAiStarred.title,subtitle:data[13].addAiStarred.subtitle,ctas:data[13].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[13].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[13].addAiStarred.key)}
							/>
						</div>

						{/* Romero */}
						<div className={item14ClassName}>
							<AiPreviewListItem
							type={data[14].type}
							image={data[14].src}
							title={data[14].title}
							subtitle={data[14].subtitle}
							onclick={() => fullAiCardShow(data[14].fullAiCardShowType, data[14].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[14].addAiStarred.key,type:data[14].addAiStarred.type,image:data[14].addAiStarred.image,title:data[14].addAiStarred.title,subtitle:data[14].addAiStarred.subtitle,ctas:data[14].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[14].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[14].addAiStarred.key)}
							/>
						</div>

						{/* Darlene */}
						<div className={itemActress}>
							<AiPreviewListItem
							type={data[3].type}
							image={data[3].src}
							title={data[3].title}
							subtitle={data[3].subtitle}
							onclick={() => fullAiCardShow(data[3].fullAiCardShowType, data[3].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[3].addAiStarred.key,type:data[3].addAiStarred.type,image:data[3].addAiStarred.image,title:data[3].addAiStarred.title,subtitle:data[3].addAiStarred.subtitle,ctas:data[3].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[3].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[3].addAiStarred.key)}
							/>
						</div>

					

						{/* Trenton */}
						<div className={item12ClassName}>
							<AiPreviewListItem
							type={data[12].type}
							image={data[12].src}
							title={data[12].title}
							subtitle={data[12].subtitle}
							onclick={() => fullAiCardShow(data[12].fullAiCardShowType, data[12].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[12].addAiStarred.key,type:data[12].addAiStarred.type,image:data[12].addAiStarred.image,title:data[12].addAiStarred.title,subtitle:data[12].addAiStarred.subtitle,ctas:data[12].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[12].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[12].addAiStarred.key)}
							/>
						</div>
						
						{/* Sound and Color 3*/}
						<div className={itemSound}>
							<AiPreviewListItem
							type={data[4].type}
							image={data[4].src}
							title={data[4].title}
							subtitle={data[4].subtitle}
							onclick={() => fullAiCardShow(data[4].fullAiCardShowType, data[4].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[4].addAiStarred.key,type:data[4].addAiStarred.type,image:data[4].addAiStarred.image,title:data[4].addAiStarred.title,subtitle:data[4].addAiStarred.subtitle,ctas:data[4].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[4].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[4].addAiStarred.key)}
							/>
						</div>
						
						{/* Flash Drive*/}
						<div className={item9ClassName}>
							<AiPreviewListItem
							type={data[9].type}
							image={data[9].src}
							title={data[9].title}
							subtitle={data[9].subtitle}
							onclick={() => fullAiCardShow(data[9].fullAiCardShowType, data[9].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[9].addAiStarred.key,type:data[9].addAiStarred.type,image:data[9].addAiStarred.image,title:data[9].addAiStarred.title,subtitle:data[9].addAiStarred.subtitle,ctas:data[9].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[9].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[9].addAiStarred.key)}
							/>
						</div>
						
						{/* Trivia Scene 2*/}
						<div className={itemTriviaFun}>
							<AiPreviewListItem
							type={data[6].type}
							image={data[6].src}
							title={data[6].title}
							subtitle={data[6].subtitle}
							onclick={() => fullAiCardShow(data[6].fullAiCardShowType, data[6].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[6].addAiStarred.key,type:data[6].addAiStarred.type,image:data[6].addAiStarred.image,title:data[6].addAiStarred.title,subtitle:data[6].addAiStarred.subtitle,ctas:data[6].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[6].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[6].addAiStarred.key)}
							/>
						</div>

						
						{/* Music Scene 2*/}
						<div className={item10ClassName}>
							<AiPreviewListItem
							type={data[10].type}
							image={data[10].src}
							title={data[10].title}
							subtitle={data[10].subtitle}
							onclick={() => fullAiCardShow(data[10].fullAiCardShowType, data[10].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[10].addAiStarred.key,type:data[10].addAiStarred.type,image:data[10].addAiStarred.image,title:data[10].addAiStarred.title,subtitle:data[10].addAiStarred.subtitle,ctas:data[10].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[10].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[10].addAiStarred.key)}
							/>
						</div>

						 {/* Trivia Scene 1*/}
						<div className={itemTriviaGeneral}>
						    <AiPreviewListItem
							type={data[5].type}
							image={data[5].src}
							title={data[5].title}
							subtitle={data[5].subtitle}
							onclick={() => fullAiCardShow(data[5].fullAiCardShowType, data[5].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[5].addAiStarred.key,type:data[5].addAiStarred.type,image:data[5].addAiStarred.image,title:data[5].addAiStarred.title,subtitle:data[5].addAiStarred.subtitle,ctas:data[5].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[5].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[5].addAiStarred.key)}
							/>
						</div>
						
						{/* Car */}
						<div className={itemCar}>
							<AiPreviewListItem
							type={data[2].type}
							image={data[2].src}
							title={data[2].title}
							subtitle={data[2].subtitle}
							onclick={() => fullAiCardShow(data[2].fullAiCardShowType, data[2].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[2].addAiStarred.key,type:data[2].addAiStarred.type,image:data[2].addAiStarred.image,title:data[2].addAiStarred.title,subtitle:data[2].addAiStarred.subtitle,ctas:data[2].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[2].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[2].addAiStarred.key)}
							/>
						</div>
						
						{/* Rami Scene 1-2*/}
						<div className={itemActor}>
							<AiPreviewListItem
							type={data[1].type}
							image={data[1].src}
							title={data[1].title}
							subtitle={data[1].subtitle}
							onclick={() => fullAiCardShow(data[1].fullAiCardShowType, data[1].fullAiCardShow)}
							addStar={() => addAiStarred({key:data[1].addAiStarred.key,type:data[1].addAiStarred.type,image:data[1].addAiStarred.image,title:data[1].addAiStarred.title,subtitle:data[1].addAiStarred.subtitle,ctas:data[1].addAiStarred.ctas})}
							removeStar={() => removeAiStarred(data[1].addAiStarred.key)}
							isStarred={() => checkAiStarred(data[1].addAiStarred.key)}
							/>
						</div>

					   
							
						
						</div>
						<div className="ai-preview-list-column"></div>

					</div>			
				</div>
			</div>
		)
	}
}