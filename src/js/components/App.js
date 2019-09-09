import React, { Component, PropTypes } from 'react';
import classNames from "classnames";
import Video from './Video';
import ControlBar from './ControlBar';
import PauseCard from './PauseCard';
import CCCard from './CCCard';
import SqueezeCard from './SqueezeCard';
import CoverImg from './CoverImg';
import ShareCard from './ShareCard';
import ShareTrigger from './ShareTrigger';
import LoadingCard from './LoadingCard';
import AdRollOverlay from './AdRollOverlay';
import AiPreview  from './AiPreview';
import AiFull  from './AiFull';
import data from './data.json';
import peopleData from './peopleData.json';
import sceneData from './sceneData.json';
import base from './base';
import { vpModeLive, vpModeVOD, maxLiveReplayTime } from '../constants';
import fs from 'fs';

const bpXlarge = 1800;
const bpLarge = 1400;
const bpDesktop = 1100;
const bpMedium = 800;
const bpSmall = 600;
const bpXsmall = 480; // for isMobile

export default class App extends Component {

	static propTypes = {
		aspectRatio: PropTypes.number,
		playlist: PropTypes.array,
		showSqueezeCard: PropTypes.bool,
		playlist: PropTypes.array,
		initialPlaylistIndex: PropTypes.number,
		endCardLinks: PropTypes.array,
		controlBarHoverTimeout: PropTypes.number,
		playNextDelay: PropTypes.number,
		playerMode: PropTypes.string,
		adRoll: PropTypes.bool,
		sharePlatforms: PropTypes.array,
		allowEmbed: PropTypes.bool,
		allowShare: PropTypes.bool,
		theme: PropTypes.object,
		pauseCardSrc: PropTypes.bool,
		glasses: PropTypes.bool,
		trivia: PropTypes.bool,
		triviaGeneral: PropTypes.bool,
		triviaFun: PropTypes.bool,
		actor: PropTypes.bool,
		actress: PropTypes.bool,
		sound: PropTypes.bool,
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
		counter: PropTypes.array,
		inputValue: PropTypes.string,
		aspectRatio: PropTypes.number,
		playlist: PropTypes.array,
		showSqueezeCard: PropTypes.bool
	}

	static childContextTypes = {
		theme: PropTypes.object
	}


	constructor(props) {
		super(props);

		// Initial state
		this.state = {
			currPlaylistIndex: props.initialPlaylistIndex,
			containerHover: false,
			hasLoadedMetadata: false,
			isPlaying: false,
			isPlayingAdRoll: props.adRoll,
			isWaiting: true,
			isScrubbing: false,
			isVolumeDragging: false,
			isVideoEnd: false,
			isFullScreen: false,
			showCCSettings: false,
			currentTime: props.playerMode === vpModeVOD ? 0 : 200,
			currentLiveReplayTime: 0,
			buffered: null,
			duration: 0,
			volume: 1,
			endCardOpen: false,
			squeezeCardOpen: false,
			showShareCard: false,
			showButtons: false,
			isMobile: false,
			isTouch: false,
			justClickedPlay: false,
			forceToTime: 0,
			inputValue: 'assets/img/mrrobotvideo4\ _larger.mp4',
			counter: [],
			messages: [],
			currentObject: '',
			pauseCardSrc: false,
			finalArray: [],
			currentItem: [],
			data: data.data,
			peopleData: peopleData.peopleData,
			sceneData: sceneData.sceneData,
			wikia: [],
			wikiaCharacters: [],
			wikiaActors: [],
			glasses: false,
			trivia: false,
			triviaGeneral: false,
			triviaFun: false,
			actress: false,
			actor: false,
			sound: false,
			item8: false,
			item9: false,
			item10: false,
			item11: false,
			item12: false,
			item13: false,
			item14: false,
			item15: false,
			item16: false,
			item17: false,
			item18: false,
			item19: false,
			item20: false,
			finalDataArray: [],
			fullAiCardStarred: [],
			fullAiShared: [],
			shareUrl: [],
			fullAiCardInScene: [],
			starredForScrolling: [1, 2, 3, 4],
			videoTrigger: 0,
			titleShare: 'first',
			urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-1-lg.jpg',
			exampleImage: 'assets/img/scene-1-lg.jpg',
			window: {
				width: 0,
				height: 0
			}
		}
	}


	componentWillMount() {
	
		var ref = base.database().ref("messages/-L06Cv1Q_nFtkzQ-VBoz");
		ref.on("value", (snapshot)=>{
			var counterSet = snapshot.val();

			this.setState({
				counter: counterSet
			});

			console.log(this.state.counter);

			var valueToLog = this.state.counter;
			var finalArrayName = [];
			var finalArrayValue = [];
			var arrays = [];
			var arraysValue = [],
			size = 20;
			var len = valueToLog.length,
			text = "";
			for (var i = 0; i < len; i++) {
				var myObject = valueToLog[i].data.concepts;

				for (var x in myObject) {
					finalArrayName.push(myObject[x].name);
					finalArrayValue.push(myObject[x].value.toFixed(2) * 100);
				}
			}
			while (finalArrayName.length > 0) {
				arrays.push(finalArrayName.splice(0, size).join(" "));
				arraysValue.push(finalArrayValue.splice(0, size).join(" "));
			}
			this.setState({
				finalArray: arrays
			});
		}, function (error) {
			console.log("Error: " + error.code);
		});


	            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
                targetUrl = 'http://mrrobot.wikia.com/api/v1/Articles/List?expand=1&abstract=500&limit=10000'
                fetch(proxyUrl + targetUrl)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network request failed.')
                    }
                    return response;
                })
                .then(data => data.json())
                .then(data => {
                this.setState({
                	wikia: data.items
                })
               
                    console.log('parsed json', this.state.wikia);
                }).then(data => {
                this.state.wikia.map((elem, index)=>{
                	if(elem.title == "Elliot Alderson"){
                		elem = {
                            key: peopleData.peopleData[0].key,
                            type: peopleData.peopleData[0].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[152].title,
                            ctas: peopleData.peopleData[0].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[152].title,
                            characterImage: peopleData.peopleData[0].characterImage,
                            actorImage: peopleData.peopleData[0].actorImage,
                            characterBio: peopleData.peopleData[0].characterBio,
                            actorBio: peopleData.peopleData[0].actorBio,
                            otherWorks: peopleData.peopleData[0].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		
                	}
                	if(elem.title == "Mr. Robot"){
                		elem = {
                            key: peopleData.peopleData[1].key,
                            type: peopleData.peopleData[1].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[18].title,
                            ctas: peopleData.peopleData[1].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[18].title,
                            characterImage: peopleData.peopleData[1].characterImage,
                            actorImage: peopleData.peopleData[1].actorImage,
                            characterBio: peopleData.peopleData[1].characterBio,
                            actorBio: peopleData.peopleData[1].actorBio,
                            otherWorks: peopleData.peopleData[1].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		
                	}

                		if(elem.title == "Darlene Alderson"){
                		elem = {
                            key: peopleData.peopleData[2].key,
                            type: peopleData.peopleData[2].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[16].title,
                            ctas: peopleData.peopleData[2].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[16].title,
                            characterImage: peopleData.peopleData[2].characterImage,
                            actorImage: peopleData.peopleData[2].actorImage,
                            characterBio: peopleData.peopleData[2].characterBio,
                            actorBio: peopleData.peopleData[2].actorBio,
                            otherWorks: peopleData.peopleData[2].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}

                		if(elem.title == "Angela Moss"){
                		elem = {
                            key: peopleData.peopleData[3].key,
                            type: peopleData.peopleData[3].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[149].title,
                            ctas: peopleData.peopleData[3].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[149].title,
                            characterImage: peopleData.peopleData[3].characterImage,
                            actorImage: peopleData.peopleData[3].actorImage,
                            characterBio: peopleData.peopleData[3].characterBio,
                            actorBio: peopleData.peopleData[3].actorBio,
                            otherWorks: peopleData.peopleData[3].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}

                		if(elem.title == "Trenton"){
                		elem = {
                            key: peopleData.peopleData[4].key,
                            type: peopleData.peopleData[4].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[181].title,
                            ctas: peopleData.peopleData[4].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[181].title,
                            characterImage: peopleData.peopleData[4].characterImage,
                            actorImage: peopleData.peopleData[4].actorImage,
                            characterBio: peopleData.peopleData[4].characterBio,
                            actorBio: peopleData.peopleData[4].actorBio,
                            otherWorks: peopleData.peopleData[4].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}

                		if(elem.title == "Mobley"){
                		elem = {
                            key: peopleData.peopleData[5].key,
                            type: peopleData.peopleData[5].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[9].title,
                            ctas: peopleData.peopleData[5].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[9].title,
                            characterImage: peopleData.peopleData[5].characterImage,
                            actorImage: peopleData.peopleData[5].actorImage,
                            characterBio: peopleData.peopleData[5].characterBio,
                            actorBio: peopleData.peopleData[5].actorBio,
                            otherWorks: peopleData.peopleData[5].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}

                		if(elem.title == "Romero"){
                		elem = {
                            key: peopleData.peopleData[6].key,
                            type: peopleData.peopleData[6].type,
                            image: elem.thumbnail,
                            title: elem.title,
                            subtitle: this.state.wikia[160].title,
                            ctas: peopleData.peopleData[6].ctas,
                            characterName: elem.title,
                            actorName: this.state.wikia[160].title,
                            characterImage: peopleData.peopleData[6].characterImage,
                            actorImage: peopleData.peopleData[6].actorImage,
                            characterBio: peopleData.peopleData[6].characterBio,
                            actorBio: peopleData.peopleData[6].actorBio,
                            otherWorks: peopleData.peopleData[6].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}

                		if(elem.title == "Whiterose"){
                		elem = {
                            key: peopleData.peopleData[7].key,
                            type: peopleData.peopleData[7].type,
                            image: peopleData.peopleData[7].image,
                            title: peopleData.peopleData[7].title,
                            subtitle: peopleData.peopleData[7].subtitle,
                            ctas: peopleData.peopleData[7].ctas,
                            characterName: peopleData.peopleData[7].title,
                            actorName: peopleData.peopleData[7].actorName,
                            characterImage: peopleData.peopleData[7].characterImage,
                            actorImage: peopleData.peopleData[7].actorImage,
                            characterBio: peopleData.peopleData[7].characterBio,
                            actorBio: peopleData.peopleData[7].actorBio,
                            otherWorks: peopleData.peopleData[7].otherWorks

                        };
                		this.setState({
                	        wikiaCharacters: this.state.wikiaCharacters.concat([elem])
                        })
                		console.log(this.state.wikiaCharacters)
                	}
                
                })
                })
                .then(data => {
                function downloadJson (code, name, type){

                var a = document.createElement("a");
                var file = new File([code], {type: type});
                a.href = URL.createObjectURL(file);
                a.download = name;
                a.click();
                }
                //downloadJson(JSON.stringify((this.state.imdb.items),null,2), 'wikia.json', 'text/plain');
                })

                   
	}
	
	getChildContext() {
		return { theme: this.props.theme };
	}


	
	componentDidMount() {
	//this.doPredict(this.state.inputValue)
	
    {/*fetch('https://api.themoviedb.org/3/tv/62560/season/1?api_key=4e3c3044296ad8e1af5f873b7376dbf3')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network request failed.')
                    }
                    return response;
                })
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        imdb: data
                });
                    console.log('parsed json', this.state.imdb);
                }).then(data => {
                function downloadJson (code, name, type){
                var a = document.createElement("a");
                var file = new File([code], {type: type});
                a.href = URL.createObjectURL(file);
                a.download = name;
                a.click();
                }
                //downloadJson(JSON.stringify((this.state.imdb.episodes[9].guest_stars),null,2), 'tmdb.json', 'text/plain');
                })
*/}

	}

	
		
	componentWillUnmount() {
		window.removeEventListener("resize", this.onWindowResize);
	}



	getTitles =()=> {
		for(let i = 0; i<this.state.wikia.length; i++) {
                    	if(this.state.wikia.title[i] == "Elliot"){
                    			console.log(true)
                    	}
                    }
	}

	onWindowResize = (e) => {
		var w = window,
		d = document,
		documentElement = d.documentElement,
		body = d.getElementsByTagName('body')[0],
		width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
		height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

		this.setState({
			window : {
				width : width,
				height : height
			}
		});
		this.detectMobile(width);
	}

	detectMobile = (_w) => {
		var _isMobile = false;
		//check if the size is xsmall
		if (_w <= bpXsmall) _isMobile = true;
		this.setState({
			isMobile : _isMobile
		});
	}
	setPlayState = (_state) => {
		this.setState({isPlaying: !this.state.isPlaying});
	}

	onMouseUp = () => {
		this.setState({
			isScrubbing: false,
			isVolumeDragging: false
		})
	}

	togglePlay = () => {
		
		const newState = {
			isPlaying: !this.state.isPlaying,
			isVideoEnd: false,
			containerHover: false
		}

		if (!this.state.isPlaying) {
			newState.justClickedPlay = true;
			setTimeout(()=> {
				this.setState({justClickedPlay: false});
			}, 1000);
		}
		
		this.setState(newState);

	}

	handleChange = (e) => {
		this.setState({ inputValue: e.target.value });
	}

	updateInputValue = (value, source) => {
		console.log(state.inputValue);
	}

	doPredict = (value) => {

			app1.models.predict(Clarifai.GENERAL_MODEL, this.state.inputValue, {video: true}).then(response => {
			this.setState({ counter: response.rawData.outputs[0].data.frames });
			console.log(this.state.counter)
			fire.database().ref('messages').push( this.state.counter );
			console.log(fire.database().ref('messages'));
			}
			)
		}

		changeSelectedSrc = (val) => {
			this.setState({ pauseCardSrc: val });
		}

		changeSelectedSrcGlasses = (val) => {
			this.setState({ glasses: val });
		}

		changeSelectedSrcTrivia = (val) => {
			this.setState({ trivia: val });
		}

		changeSelectedSrcTriviaGeneral = (val) => {
			this.setState({ triviaGeneral: val });
		}

		changeSelectedSrcTriviaFun = (val) => {
			this.setState({ triviaFun: val });
		}

		changeSelectedSrcActress = (val) => {
			this.setState({ actress: val });
		}

		changeSelectedSrcActor = (val) => {
			this.setState({ actor: val });
		}

		changeSelectedSrcSound = (val) => {
			this.setState({ sound: val });
		}

		changeSelectedSrcitem8 = (val) => {
			this.setState({ item8: val });
		}

		changeSelectedSrcitem9 = (val) => {
			this.setState({ item9: val });
		}

		changeSelectedSrcitem10 = (val) => {
			this.setState({ item10: val });
		}

		changeSelectedSrcitem11 = (val) => {
			this.setState({ item11: val });
		}

		changeSelectedSrcitem12 = (val) => {
			this.setState({ item12: val });
		}

		
		changeSelectedSrcitem13 = (val) => {
			this.setState({ item13: val });
		}


		changeSelectedSrcitem14 = (val) => {
			this.setState({ item14: val });
		}

		changeSelectedSrcitem15 = (val) => {
			this.setState({ item15: val });
		}

		changeSelectedSrcitem16 = (val) => {
			this.setState({ item16: val });
		}

		changeSelectedSrcitem17 = (val) => {
			this.setState({ item17: val });
		}

		changeSelectedSrcitem18 = (val) => {
			this.setState({ item18: val });
		}

		changeSelectedSrcitem19 = (val) => {
			this.setState({ item19: val });
		}

		changeSelectedSrcitem20 = (val) => {
			this.setState({ item20: val });
		}



		/********* Video events **********/

		onProgress = (time, bufferedRange) => {

			var newState = {
				currentTime: time,
				buffered: bufferedRange,
				currentItem: this.state.finalArray[this.state.currentTime.toFixed(0)/1]
			};

			console.log(this.state.currentItem);
			// Open up the sqeeze card as we approach the end
			if (!this.state.isPlayingAdRoll) {
				if (this.props.endCardShowTime > 0) {
					var timeLeft = this.state.duration - time;
					if (!this.state.squeezeCardOpen && timeLeft <= this.props.endCardShowTime && timeLeft > this.props.endCardShowTime - 1) {
						newState.squeezeCardOpen = true;
					}
				}
			}
			this.setState(newState);
		}

		jumpToScene = (val) => {

			var newState = {
				isPlaying: true,
				showFullAiCard: false,
				videoTrigger: val
			};
			this.setState(newState);
		}


		resetScene = () => {

			var newState = {

				videoTrigger: 0
			};
			this.setState(newState);
		}


		onLoad = (data) => {
			this.setState({
				isWaiting: false,
				duration: data.duration,
				hasLoadedMetadata: true,
				isTouch: (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
			})
			this.onWindowResize();
			window.addEventListener("resize", this.onWindowResize);
		}

		onVideoCanPlay = () => {
			this.setState({
				isWaiting: false
			})
		}

		onVideoWaiting = () => {
			console.log('waiting');
			// this.setState({
			// 	isWaiting: true
			// })
		}


		onVideoEnd = () => {
			this.setState({
				isPlaying: false,
				isVideoEnd: true
			})
		}


		onVideoClick = (e) => {
			e.preventDefault();
			if (this.state.squeezeCardOpen) {
				this.setState({
					squeezeCardOpen: false
				})
			}
			else {
				this.togglePlay();
			}
		}



		onVolumeChanged = (val, fromMouse = true) => {
			this.setState({
				volume: val,
				isVolumeDragging: fromMouse
			})
		}

		onScrubberChanged = (val, fromMouse = true) => {

			if (this.props.playerMode === vpModeVOD) {
				this.setState({
					isScrubbing: fromMouse,
					currentTime: val
				})
			}
			else {
				let currentLiveReplayTime = maxLiveReplayTime - val;
				let currentTime = (val/maxLiveReplayTime) * 200;
				this.setState({
					isScrubbing: fromMouse,
					currentLiveReplayTime: currentLiveReplayTime,
					currentTime: currentTime,
					forceToTime: currentTime
				})			
			}


		}

		onToggleFullScreen = () => {
			this.setState({
				isFullScreen: !this.state.isFullScreen
			})
		}

		onClickCCSettings = () => {
			this.setState({
				showCCSettings: true
			})
		}

		onCCSettingsSave = () => {
			this.setState({
				showCCSettings: false
			})
		}

		onCCSettingsCancel = () => {
			this.setState({
				showCCSettings: false
			})
		}

		shareCardShow = () => {
			this.setState({
				showShareCard: true,
			})
		 if(this.state.currentTime >= 0 && this.state.currentTime <= 55.00) {
		 	this.setState({
				titleShare: this.state.sceneData[0][0].title,
				urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-1-lg.jpg',
				exampleImage: this.state.sceneData[0][0].image
			})
		 	 
		 }
		 if(this.state.currentTime >= 55.00 && this.state.currentTime <= 125.00) {
		 	this.setState({
				titleShare: this.state.sceneData[1][0].title,
				urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-2-lg.jpg',
				exampleImage: this.state.sceneData[1][0].image
			})
		 	 
		 }
		 if(this.state.currentTime >= 125.00 && this.state.currentTime <= 194.00) {
		 	this.setState({
				titleShare: this.state.sceneData[2][0].title,
				urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-3-lg.jpg',
				exampleImage: this.state.sceneData[2][0].image
			})
		 	 
		 }
		 if(this.state.currentTime >= 194.00 && this.state.currentTime <= 304.00) {
		 	this.setState({
				titleShare: this.state.sceneData[3][0].title,
				urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-4-lg.jpg',
				exampleImage: this.state.sceneData[3][0].image
			})
		 	 
		 }
		 if(this.state.currentTime >= 304.00 && this.state.currentTime <= 405.00) {
		 	this.setState({
				titleShare: this.state.sceneData[4][0].title,
				urlMainShareCard: 'http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-5-lg.jpg',
				exampleImage: this.state.sceneData[4][0].image
			})
		 	 
		 }
		}
		shareCardHide = () => {
			this.setState({
				showShareCard: false
			})
		}

		shareButtonsShow = (val) => {
			this.setState({
				showButtons: val
			})
			console.log(this.state.showButtons)
		}
		shareButtonsHide = (val) => {
			this.setState({
				showButtons: false
			})
		}

		fullAiCardShow = (state, person) => {
			this.setState({
				fullAiCardState: state,
				fullAiCardPerson: person,
				showFullAiCard: true
			});
		}

		fullAiCardHide = () => {
			this.setState({
				showFullAiCard: false
			});
		}

		fullAiCardGoToPage = (e, p) => {
			this.setState({
				fullAiCardState: e,
				fullAiCardPerson: p
			});
		}

		fullAiCardShowInScene = (s) => {
			// console.log(s);
			this.setState({
				fullAiCardState: 'in-scene',
				fullAiCardInScene: s
			});
		}

		addAiStarred = (o) => {
			var starred = this.state.fullAiCardStarred;
			starred.unshift(o);
			this.setState({
				fullAiCardStarred: starred
			});
			 //console.log(this.state.fullAiCardStarred);
		}


		addShareData = (o) => {
			var shared = this.state.fullAiShared;
			var url = this.state.shareUrl;
			shared.unshift(o);
			url.unshift(o)
		
			
			this.setState({
            fullAiShared: shared,
            shareUrl: url
            });


		

			console.log(this.state.shareUrl)
			console.log(this.state.fullAiShared)
			
		}

		removeAiStarred = (key) => {
			var starred = this.state.fullAiCardStarred;
			starred = starred.filter(function (obj) {
				return obj.key !== key;
			});
			this.setState({
				fullAiCardStarred: starred
			});
		}

		checkAiStarred = (key) => {
			var starred = this.state.fullAiCardStarred;
			starred = starred.filter(function (obj) {
				return obj.key == key;

			});
			return starred.length == 0;

		}

		resetStarredItemState = (val) => {
			var starred = this.state.fullAiCardStarred;
			starred.unshift(val);
			this.setState({ fullAiCardStarred: starred });
			console.log(this.state.fullAiCardStarred);

		}


		onReplay = () => {
			this.setState({
				isPlaying: true,
				currentTime: 0,
				squeezeCardOpen: false
			})
		}

		onMouseMove = (e) => {
			clearTimeout(this.mouseMoveTimeout);
			clearTimeout(this.mouseMoveTimeoutAiPreview);
			this.mouseMoveTimeout = setTimeout(this.clearJustMouseMoved, this.props.controlBarHoverTimeout*1000);
			this.mouseMoveTimeoutAiPreview = setTimeout(this.clearJustMouseMovedAiPreview, this.props.controlBarHoverTimeout*12000);
			if (!this.state.isJustMouseMoved) {
				this.setState({
					isJustMouseMoved: true
				})
			}

			if (!this.state.isJustMouseMovedAiPreview) {
				this.setState({
					isJustMouseMovedAiPreview: true
				})
			}
		}

		onMouseLeave = (e) => {
			clearTimeout(this.mouseMoveTimeout);
			if (this.state.isJustMouseMoved) {
				this.setState({
					isJustMouseMoved: false
				})
			}	
			if (this.state.isJustMouseMovedAiPreview) {
				this.setState({
					isJustMouseMovedAiPreview: false
				})
			}		
		}

		clearJustMouseMoved = () => {
			this.setState({
				isJustMouseMoved: false,
			})
		}

		clearJustMouseMovedAiPreview = () => {
			this.setState({
				isJustMouseMovedAiPreview: false,
			})
		}



		goToNextPlaylistItem = () => {
			const { playlist } = this.props;	
			const { currPlaylistIndex } = this.state;

			if (playlist[currPlaylistIndex + 1] == undefined) {
				return;
			}

			this.setState({
				currPlaylistIndex: currPlaylistIndex + 1,
				isWaiting: true,
				isPlaying: true,
				currentTime: 0,
				endCardOpen: false,
				squeezeCardOpen: false,
				showShareCard: false,
				showCCSettings: false,
				isVideoEnd: false
			})

		}


		/* ---- Ad roll stuff ---- */

		onAdRollProgress = () => {

		}

		onAdRollCanPlay = () => {
			this.setState({
				isWaiting: false
			})
		}

		onAdRollWaiting = () => {

		}

		onAdRollEnd = () => {
			this.setState({
				isPlayingAdRoll: false,
				isWaiting: true,
				currentTime: 0
			})
		}

		/* ---- Style ---- */

		getGlobalStyle() {

			let str = "";
			const { colorHighlight } = this.props.theme;
			str = str + ".theme-background { background-color: " + colorHighlight +  ";}";
			str = str + ".rc-slider-track { background-color: " + colorHighlight +  ";}";
			return str;
		}

		render() {



			const { 
				aspectRatio, 
				endCardShowTime,
				playlist,
				endCardLinks,
				playNextDelay,
				allowEmbed,
				sharePlatforms,
				allowShare
			} = this.props;

			const { 
				isPlaying, 
				currentTime, 
				currentLiveReplayTime,
				forceToTime,
				buffered,
				duration, 
				isScrubbing, 
				volume, 
				isVolumeDragging, 
				isFullScreen,
				isVideoEnd,
				isJustMouseMoved,
				isJustMouseMovedAiPreview,
				showCCSettings,
				isWaiting,
				showShareCard,
				showButtons,
				squeezeCardOpen,
				isMobile,
				isTouch,
				currPlaylistIndex,
				hasLoadedMetadata,
				isPlayingAdRoll,
				justClickedPlay,
				inputValue,
				counter,
				currentObject,
				pauseCardSrc,
				currentItem,
				data,
				peopleData,
				sceneData,
				glasses,
				trivia,
				triviaGeneral,
				triviaFun,
				actress,
				actor,
				sound,
				item8,
				item9,
				item10,
				item11,
				item12,
				item13,
				item14,
				item15,
				item16,
				item17,
				item18,
				item19,
				item20,
				fullAiCardState,
				fullAiCardPerson,
				fullAiCardInScene,
				fullAiCardStarred,
				showFullAiCard,
				videoTrigger,
				starredForScrolling,
				fullAiShared,
				shareUrl,
				urlMainShareCard,
				titleShare,
				exampleImage, 
				wikiaCharacters



			} = this.state;

			const { videoSrc, coverImgSrc, title, subtitle, description } = playlist[currPlaylistIndex];
			const nextPlaylistItem = playlist[currPlaylistIndex + 1];
			const hasNextItem = nextPlaylistItem !== undefined;
			const timeToEnd = duration - currentTime;
		//const nextCountdown = parseInt(duration - currentTime + playNextDelay);

		const showCCSettingsCalc = this.state.window.width > bpSmall && showCCSettings;
		const coverImgShow = currentTime === 0 && !isPlaying;
		const replayCardShow = isVideoEnd && !hasNextItem;

		const pauseCardShow = (isVideoEnd ? false : !isPlaying) && !showShareCard && !showCCSettingsCalc && !showFullAiCard;
		let endCardShow;

		if (endCardShowTime === 0) {
			endCardShow = timeToEnd <= 0.2 && !showShareCard && hasNextItem && !isWaiting && !isPlayingAdRoll;
		} else {
			endCardShow = (squeezeCardOpen || timeToEnd <= 0.2) && hasNextItem && !isWaiting && !isPlayingAdRoll;
		}

		const AiPreviewShow = (isJustMouseMovedAiPreview || isScrubbing || isVolumeDragging || isFullScreen) && !(justClickedPlay || endCardShow || coverImgShow || showCCSettingsCalc || showShareCard || isVideoEnd) && !showFullAiCard;

		const controlBarShow = (isJustMouseMoved || isScrubbing || isVolumeDragging) && !(justClickedPlay || endCardShow || coverImgShow || showCCSettingsCalc || showShareCard || isVideoEnd) && !showFullAiCard;
		const showShareTrigger = allowShare && (pauseCardShow || isJustMouseMoved && !showShareCard && !showCCSettings && !isPlayingAdRoll || isVideoEnd && !hasNextItem && !showShareCard) && !showFullAiCard;


		var isPlayingCalc;
		if (this.props.playerMode == vpModeVOD) {
			isPlayingCalc = !showShareCard && !showFullAiCard && (!showCCSettingsCalc || isMobile) && isPlaying;
		}else if (this.props.playerMode == vpModeLive) {
			isPlayingCalc = isPlaying;
		}

		
		const runSqueezeCardTimer = !showShareCard;
		const endCardShowInfo = !showShareCard && !showCCSettingsCalc;
		const loadingCardShow = isPlaying && isWaiting;

		//const controlBarShow = true;
		const classnames = classNames({
			'container': true,
			'container--playing': isPlayingCalc,
			'container--volume-dragging': isVolumeDragging,
			'container--fullscreen': isFullScreen,
			'container--show-controls': controlBarShow,
			//'container--show-controls': true,
			'container--show-share-card': showShareCard,
			'container--show-ai-full-card': showFullAiCard,
			'container--is-mobile': isMobile,
			'container--is-touch': isTouch,
			'container--show-squeeze-card': endCardShow,
			'container--no-squeeze': endCardShowTime === 0,
			'container--is-playing-ad': isPlayingAdRoll,
			[this.props.playerMode]: true
		})

		const style = {
			paddingTop: ((1/aspectRatio) * 100) + "%"
		}

		const globalStyle = this.getGlobalStyle();



		return (
			<div className={classnames} style={style} ref={(el)=>{this.player = el}} onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
			<style>
			{ globalStyle }
			</style>


			{ isPlayingAdRoll ?
				<div>
				<Video 
				key={-1}
				videoSrc={"assets/img/mobile-stroke-ad.mp4"} 
				currentTime={0}
				isPlaying={isPlaying}
				isScrubbing={false}
				isFullScreen={isFullScreen}
				onProgress={this.onProgress}
				onLoad={this.onLoad}
				volume={volume}
				onToggleFullScreen={this.onToggleFullScreen}
				onVideoEnd={this.onAdRollEnd}
				onVideoCanPlay={this.onAdRollCanPlay}
				onVideoWaiting={this.onAdRollWaiting}
				forceToTime={forceToTime}
				/>
				<AdRollOverlay timeToEnd={timeToEnd} placement="overlay"/>
				</div>
				:
				<Video 
				doPredict={this.doPredict}
				key={videoSrc}
				videoSrc={videoSrc} 
				currentTime={currentTime}
				isPlaying={isPlayingCalc}
				isScrubbing={isScrubbing}
				isFullScreen={isFullScreen}
				onLoad={this.onLoad} 
				onProgress={this.onProgress}
				volume={volume}
				endCardShowInfo={endCardShowInfo}
				onToggleFullScreen={this.onToggleFullScreen}
				onClick={this.onVideoClick}
				onVideoEnd={this.onVideoEnd}
				onVideoCanPlay={this.onVideoCanPlay}
				onVideoWaiting={this.onVideoWaiting}
				setPlayState={this.setPlayState}
				forceToTime={forceToTime}
				inputValue={inputValue}
				handleChange={this.handleChange}
				updateInputValue={this.updateInputValue}
				counter={counter}
				currentObject={currentObject}
				pauseCardSrc={pauseCardSrc}
				changeSelectedSrc={this.changeSelectedSrc}
				changeSelectedSrcGlasses={this.changeSelectedSrcGlasses}
				changeSelectedSrcTrivia={this.changeSelectedSrcTrivia}
				changeSelectedSrcTriviaGeneral={this.changeSelectedSrcTriviaGeneral}
				changeSelectedSrcTriviaFun={this.changeSelectedSrcTriviaFun}
				changeSelectedSrcActress={this.changeSelectedSrcActress}
				changeSelectedSrcActor={this.changeSelectedSrcActor}
				changeSelectedSrcSound={this.changeSelectedSrcSound}
				changeSelectedSrcitem8={this.changeSelectedSrcitem8}
				changeSelectedSrcitem9={this.changeSelectedSrcitem9}
				changeSelectedSrcitem10={this.changeSelectedSrcitem10}
				changeSelectedSrcitem11={this.changeSelectedSrcitem11}
				changeSelectedSrcitem12={this.changeSelectedSrcitem12}
				changeSelectedSrcitem13={this.changeSelectedSrcitem13}
				changeSelectedSrcitem14={this.changeSelectedSrcitem14}
				changeSelectedSrcitem15={this.changeSelectedSrcitem15}
				changeSelectedSrcitem16={this.changeSelectedSrcitem16}
				changeSelectedSrcitem17={this.changeSelectedSrcitem17}
				changeSelectedSrcitem18={this.changeSelectedSrcitem18}
				changeSelectedSrcitem19={this.changeSelectedSrcitem19}
				changeSelectedSrcitem20={this.changeSelectedSrcitem20}
				currentItem={currentItem}
				glasses={glasses}
				actor={actor}
				actress={actress}
				sound={sound}
				trivia={trivia}
				triviaGeneral={triviaGeneral}
				triviaFun={triviaFun}
				data={data}
				item8={item8}
				item9={item9}
				item10={item10}
				item11={item11}
				item12={item12}
				item13={item13}
				item14={item14}
				item15={item15}
				item16={item16}
				item17={item17}
				item18={item18}
				item19={item19}
				item20={item20}
				videoTrigger={videoTrigger}
				resetScene={this.resetScene}  
				/>
			}
			<LoadingCard
			show={loadingCardShow}
			/>
			<CoverImg
			src={coverImgSrc}
			show={coverImgShow}
			/>
			<PauseCard 
			show={pauseCardShow}
			onClick={this.togglePlay}
			videoTitle={title}
			videoSubtitle={subtitle}
			videoDescription={description}
			isVideoEnd={isVideoEnd}
			hasNextItem={hasNextItem}
			showShareCard={showShareCard}
			backgroundImgSrc={coverImgSrc}
			timeToEnd={timeToEnd}
			duration={duration}
			/>
			<PauseCard 
			show={replayCardShow}
			onClick={this.togglePlay}
			videoTitle={title}
			videoSubtitle={subtitle}
			videoDescription={description}
			mode="replay"
			isVideoEnd={isVideoEnd}
			hasNextItem={hasNextItem}
			showShareCard={showShareCard}
			backgroundImgSrc={coverImgSrc}
			/>

			<AiPreview
			wikiaCharacters={wikiaCharacters}
			show={AiPreviewShow}
			currentTime={currentTime}
			pauseCardSrc={pauseCardSrc}
			changeSelectedSrc={(val) => this.changeSelectedSrc(val)}
			changeSelectedSrcGlasses={(val) => this.changeSelectedSrcGlasses(val)}
			changeSelectedSrcTrivia={(val) => this.changeSelectedSrcTrivia(val)}
			changeSelectedSrcTriviaGeneral={(val) => this.changeSelectedSrcTriviaGeneral(val)}
			changeSelectedSrcTriviaFun={(val) => this.changeSelectedSrcTriviaFun(val)}
			changeSelectedSrcActress={(val) => this.changeSelectedSrcActress(val)}
			changeSelectedSrcSound={(val) => this.changeSelectedSrcSound(val)}
			changeSelectedSrcActor={(val) => this.changeSelectedSrcActor(val)}
			changeSelectedSrcitem8={(val) => this.changeSelectedSrcitem8(val)}
			changeSelectedSrcitem9={(val) => this.changeSelectedSrcitem9(val)}
			changeSelectedSrcitem10={(val) => this.changeSelectedSrcitem10(val)}
			changeSelectedSrcitem11={(val) => this.changeSelectedSrcitem11(val)}
			changeSelectedSrcitem12={(val) => this.changeSelectedSrcitem12(val)}
			changeSelectedSrcitem13={(val) => this.changeSelectedSrcitem13(val)}
			changeSelectedSrcitem14={(val) => this.changeSelectedSrcitem14(val)}
			changeSelectedSrcitem15={(val) => this.changeSelectedSrcitem15(val)}
			changeSelectedSrcitem16={(val) => this.changeSelectedSrcitem16(val)}
			changeSelectedSrcitem17={(val) => this.changeSelectedSrcitem17(val)}
			changeSelectedSrcitem18={(val) => this.changeSelectedSrcitem18(val)}
			changeSelectedSrcitem19={(val) => this.changeSelectedSrcitem19(val)}
			changeSelectedSrcitem20={(val) => this.changeSelectedSrcitem20(val)}
			data={data}
			glasses={glasses}
			actress={actress}
			actor={actor}
			sound={sound}
			trivia={trivia}
			triviaGeneral={triviaGeneral}
			triviaFun={triviaFun}
			item8={item8}
			item9={item9}
			item10={item10}
			item11={item11}
			item12={item12}
			item13={item13}
			item14={item14}
			item15={item15}
			item16={item16}
			item17={item17}
			item18={item18}
			item19={item19}
			item20={item20}
			fullAiCardShow={this.fullAiCardShow}
			showFullAiCard={showFullAiCard}
			addAiStarred={this.addAiStarred}
			removeAiStarred={this.removeAiStarred}
			checkAiStarred={this.checkAiStarred}
			endCardShow={endCardShow}
			isFullScreen={isFullScreen}
			

			/>
			<CCCard
			show={showCCSettingsCalc}
			onSave={this.onCCSettingsSave}
			onCancel={this.onCCSettingsCancel}
			/>
			<ShareCard
			show={showShareCard}
			onClose={this.shareCardHide}
			allowEmbed={allowEmbed}
			sharePlatforms={sharePlatforms}
			currentTime={currentTime}
			exampleImage={exampleImage}
			urlMainShareCard={urlMainShareCard}
			titleShare={titleShare}
			/>
			<ShareTrigger
			show={showShareTrigger}
			onClick={this.shareCardShow}
			isVideoEnd={isVideoEnd}
			hasNextItem={hasNextItem}
			showShareCard={showShareCard}
			/>
			<SqueezeCard
			show={endCardShow}
			backgroundImgSrc={coverImgSrc}
			onReplay={this.onReplay}
			goToNextPlaylistItem={this.goToNextPlaylistItem}
			nextItem={nextPlaylistItem}
			endCardShowInfo={endCardShowInfo}
			links={endCardLinks}
			playNextDelay={playNextDelay}
			timeToEnd={timeToEnd}
			runTimer={runSqueezeCardTimer}
			/>
			<ControlBar
			isScrubbing={isScrubbing}
			isPlaying={isPlaying}
			onTogglePlay={this.togglePlay}
			currentTime={currentTime}
			currentLiveReplayTime={currentLiveReplayTime}
			duration={duration}
			onStartHandleDrag={this.onStartHandleDrag}
			volume={volume}
			onVolumeChanged={this.onVolumeChanged}
			onStartVolumeDrag={this.onStartVolumeDrag}
			isVolumeDragging={isVolumeDragging}
			onScrubberChanged={this.onScrubberChanged}
			onToggleFullScreen={this.onToggleFullScreen}
			onClickCCSettings={this.onClickCCSettings}
			videoSrc={videoSrc}
			nextPlaylistItem={nextPlaylistItem}
			goToNextPlaylistItem={this.goToNextPlaylistItem}
			playerMode={this.props.playerMode}
			isPlayingAdRoll={isPlayingAdRoll}
			/>

			<AiFull
			wikiaCharacters={wikiaCharacters}
			showButtons={showButtons}
			shareButtonsShow={(val) => this.shareButtonsShow(val)}
			shareButtonsHide={this.shareButtonsHide}
			starredForScrolling={starredForScrolling}
			fullAiCardShow={this.fullAiCardShow}
			isFullScreen={isFullScreen}
			show={showFullAiCard}
			close={this.fullAiCardHide}
			showing={fullAiCardState}
			goToPage={this.fullAiCardGoToPage}
			showInScene={this.fullAiCardShowInScene}
			personData={fullAiCardPerson}
			starredData={fullAiCardStarred}
			fullAiShared={fullAiShared}
			shareUrl={shareUrl}
			inSceneData={fullAiCardInScene}
			addAiStarred={this.addAiStarred}
			addShareData={this.addShareData}
			removeAiStarred={this.removeAiStarred}
			checkAiStarred ={this.checkAiStarred}
			currentTime={currentTime}
			jumpToScene={this.jumpToScene}
			data={data}
			peopleData={peopleData}
			sceneData={sceneData}
			/>
			</div>
			)
}
}