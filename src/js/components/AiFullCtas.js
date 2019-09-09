import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullCtas extends Component {

	static propTypes = {
		ctas: PropTypes.array,
		currentTime: PropTypes.number,
		jumpToScene: PropTypes.func,
		
	}

	constructor() {
		super();
	}



	handleClick = (e, href, onclick) => {
	
		let val;
		console.log(e.currentTarget.firstChild.nextSibling.innerHTML)
		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product") {
			window.open("http://www.torrid.com/product/floral-heart-sunglasses/10265338.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product ") {
			window.open("http://www.cadillac.com/preceding-year/escalade-suv.html");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product  ") {
			window.open("https://www.bestbuy.com/site/samsung-duo-32gb-usb-3-0-micro-usb-flash-drive/5512800.p");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Product   ") {
			window.open("https://us.lkbennett.com/product/CONTSCFLORETEPATENTLEATHERBlackBlack~Floret-Patent-Leather-Heel-Black");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song") {
			window.open("https://open.spotify.com/track/65wx71brAmEQz66GXXF8gI");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song ") {
			window.open("https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg");

		}

		if (e.currentTarget.firstChild.nextSibling.innerHTML == "View Song  ") {
			window.open("https://open.spotify.com/track/6taFIgW5YE94x1icBh5vTg");

		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio") {

			this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[2].key, characterName: this.props.wikiaCharacters[2].characterName,actorName:this.props.wikiaCharacters[2].actorName,characterImage:this.props.wikiaCharacters[2].characterImage,actorImage:this.props.wikiaCharacters[2].actorImage,characterBio:this.props.wikiaCharacters[2].characterBio,actorBio:this.props.wikiaCharacters[2].actorBio,
				otherWorks:this.props.wikiaCharacters[2].otherWorks});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio ") {

            this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[1].key, characterName: this.props.wikiaCharacters[1].characterName,actorName:this.props.wikiaCharacters[1].actorName,characterImage:this.props.wikiaCharacters[1].characterImage,actorImage:this.props.wikiaCharacters[1].actorImage,characterBio:this.props.wikiaCharacters[1].characterBio,actorBio:this.props.wikiaCharacters[1].actorBio,
				otherWorks:this.props.wikiaCharacters[1].otherWorks});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio  ") {

            this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[4].key, characterName: this.props.wikiaCharacters[4].characterName,actorName:this.props.wikiaCharacters[4].actorName,characterImage:this.props.wikiaCharacters[4].characterImage,actorImage:this.props.wikiaCharacters[4].actorImage,characterBio:this.props.wikiaCharacters[4].characterBio,actorBio:this.props.wikiaCharacters[4].actorBio,
				otherWorks:this.props.wikiaCharacters[4].otherWorks});
			
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio   ") {

		  this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[0].key, characterName: this.props.wikiaCharacters[0].characterName,actorName:this.props.wikiaCharacters[0].actorName,characterImage:this.props.wikiaCharacters[0].characterImage,actorImage:this.props.wikiaCharacters[0].actorImage,characterBio:this.props.wikiaCharacters[0].characterBio,actorBio:this.props.wikiaCharacters[0].actorBio,
				otherWorks:this.props.wikiaCharacters[0].otherWorks});
			
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Bio    ") {

		  this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[6].key, characterName: this.props.wikiaCharacters[6].characterName,actorName:this.props.wikiaCharacters[6].actorName,characterImage:this.props.wikiaCharacters[6].characterImage,actorImage:this.props.wikiaCharacters[6].actorImage,characterBio:this.props.wikiaCharacters[6].characterBio,actorBio:this.props.wikiaCharacters[6].actorBio,
				otherWorks:this.props.wikiaCharacters[6].otherWorks});
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Bio") {
          this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[3].key, characterName: this.props.wikiaCharacters[3].characterName,actorName:this.props.wikiaCharacters[3].actorName,characterImage:this.props.wikiaCharacters[3].characterImage,actorImage:this.props.wikiaCharacters[3].actorImage,characterBio:this.props.wikiaCharacters[3].characterBio,actorBio:this.props.wikiaCharacters[3].actorBio,
				otherWorks:this.props.wikiaCharacters[3].otherWorks});
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Bio") {
             this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[5].key, characterName: this.props.wikiaCharacters[5].characterName,actorName:this.props.wikiaCharacters[5].actorName,characterImage:this.props.wikiaCharacters[5].characterImage,actorImage:this.props.wikiaCharacters[5].actorImage,characterBio:this.props.wikiaCharacters[5].characterBio,actorBio:this.props.wikiaCharacters[5].actorBio,
				otherWorks:this.props.wikiaCharacters[5].otherWorks});
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Bio") {

			  this.props.fullAiCardShow('character', {key: this.props.wikiaCharacters[7].key, characterName: this.props.wikiaCharacters[7].characterName,actorName:this.props.wikiaCharacters[7].actorName,characterImage:this.props.wikiaCharacters[7].characterImage,actorImage:this.props.wikiaCharacters[7].actorImage,characterBio:this.props.wikiaCharacters[7].characterBio,actorBio:this.props.wikiaCharacters[7].actorBio,
				otherWorks:this.props.wikiaCharacters[7].otherWorks});
		}
		
		

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene") {

			val = 1;
			this.props.jumpToScene(val);
			
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene ") {
			val = 2;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML ==" Go To Scene") {
            val = 3;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene ") {

	        val = 4;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene  ") {

	         val = 5;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene   ") {

	        val = 6;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene    ") {

	        val = 7;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene     ") {

	         val = 8;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene      ") {

	         val = 9;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "Go To Scene       ") {

	        val = 10;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene") {

	        val = 11;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Scene") {

	        val = 12;
			this.props.jumpToScene(val);
		}


		if(e.currentTarget.firstChild.nextSibling.innerHTML == "       Go To Scene ") {

	        val = 13;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene  ") {

	         val = 14;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene ") {

	        val = 15;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene  ") {

			val = 16;
			this.props.jumpToScene(val);
		   
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene   ") {
            val = 17;
			this.props.jumpToScene(val);
		}	

		if(e.currentTarget.firstChild.nextSibling.innerHTML == " Go To Scene    ") {
            val = 18;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene    ") {
            val = 19;
			this.props.jumpToScene(val);
		}
		if(e.currentTarget.firstChild.nextSibling.innerHTML == "   Go To Scene    ") {
            val = 20;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "    Go To Scene    ") {
            val = 21;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "  Go To Scene        ") {
            val = 22;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "    Go To Scene") {
            val = 23;
			this.props.jumpToScene(val);
		}

		if(e.currentTarget.firstChild.nextSibling.innerHTML == "     Go To Scene  ") {
            val = 24;
			this.props.jumpToScene(val);
		}

		

		

		else {
			console.log("no target")
		}
	
	
	}

	render() {
		const { ctas, jumpToScene, currentTime, fullAiCardShow, wikiaCharacters } = this.props;
		let buttons;


	

		if (this.props.ctas) {
			buttons = ctas.map((cta, index) =>
				<a key={index} onClick={ (e) => this.handleClick(e, cta[2], cta[3]) }>
					<i className={cta[1]}></i>
					<span>{cta[0]}</span>
				</a>
			);
		}

		return (
			<div className="ctas">
				{buttons}	
			</div>
		)
	}
}