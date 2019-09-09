import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import classNames from "classnames";


export default class ShareItemCard extends Component {



  constructor(props) {
	  super(props);
	  this.state = {title: '',
	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
	                exampleImage: 'assets/img/scene-1-lg.jpg',
	                show: false,
	                 };
		
  }

  handleChange = () => {
    console.log(this.props.fullAiShared[0].ctas[0][2])

  if(this.props.fullAiShared[0].key == 0 && !this.state.show){
  	 this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
  	                url: this.props.fullAiShared[0].ctas[0][2],
  	                exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
  	                show: true
  	                 });
  }
  if(this.props.fullAiShared[0].key == 0 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
   if(this.props.fullAiShared[0].key == 3 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                     exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 3 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
   if(this.props.fullAiShared[0].key == 11 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                     exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 11 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
   if(this.props.fullAiShared[0].key == 24 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                     exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 24 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
   if(this.props.fullAiShared[0].key == 1 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                    exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 1 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
  if(this.props.fullAiShared[0].key == 9 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                    exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 9 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
  	                show: false
  	                 });
  }
   if(this.props.fullAiShared[0].key == 10 && !this.state.show){
     this.setState({title: this.props.fullAiShared[0].title + " " + "from Mr Robot • S01 E10",
                    url: this.props.fullAiShared[0].ctas[0][2],
                    exampleImage: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/' + this.props.fullAiShared[0].image,
                    show: true
                     });
  }
  if(this.props.fullAiShared[0].key == 10 && this.state.show){
  	this.setState({title: '',
  	                url: 'http://brandedcontent.nbcuxlab.com/player-prototype-a/',
  	                exampleImage: '',
  	                show: false
  	                 });
  }
  }

  handleSubmit = (event)=>{
   
    console.log(this.state.value);
    
    event.preventDefault();
  }




	

	render() {

		let { show, allowEmbed, sharePlatforms, data, addShareData, fullAiShared, shareUrl, showButtons, shareButtonsShow, shareButtonsHide} = this.props;

		const {
              FacebookShareButton,
              GooglePlusShareButton,
              TwitterShareButton,
              PinterestShareButton,
            } = ShareButtons;

        

        const classnames = classNames({
 			'share-item-buttons': true,
 			'share-item-buttons--show': this.state.show
 		});

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const GooglePlusIcon = generateShareIcon('google');
        const PinterestIcon = generateShareIcon('pinterest');
   

        const title = 'Scene 1: Elliot looks for a clue';
        let shareUrl1 = "http://brandedcontent.nbcuxlab.com/player-prototype-a/assets/img/scene-1-lg.jpg";
        let exampleImage = "assets/img/scene-1-lg.jpg";


		const content = (
			<div className="share-item-card">

		
				<i className="iconcss icon-share-outline" onClick={()=>{addShareData(), this.handleChange()}}></i>
			
		<div className={classnames}>
		 <button className="share-card__button twitter">
		     <TwitterShareButton
                   url={this.state.url}
                   title={this.state.title}
                   media={exampleImage}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                  <i className="iconcss icon-twitter-outline"></i>
              </TwitterShareButton>
	     </button>
         <button className="share-card__button facebook">
            <FacebookShareButton
               url={this.state.url}
               quote={this.state.title}
               windowWidth={1000}
               windowHeight={730}
               className="Demo__some-network__share-button">
               <i className="iconcss icon-facebook-outline"></i>
              </FacebookShareButton> 
	     </button>
         <button className="share-card__button pinterest">
			  <PinterestShareButton
                   url={String(this.state.url)}
                   media={`${String(this.state.exampleImage)}`}
                   description={this.state.title}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                   <i className="iconcss icon-pinterest-outline"></i>
               </PinterestShareButton>
		 </button>
		 <button className="share-card__button google-plus">
			  <GooglePlusShareButton
                   url={this.state.url}
                   windowWidth={1000}
                   windowHeight={730}
                   className="Demo__some-network__share-button">
                   <i className="iconcss icon-google-plus-outline"></i>
              </GooglePlusShareButton>
		 </button>	
		 </div>	
	 </div>
		) 
		return (
			<div>
				{content}
			</div>
		)
	}
}