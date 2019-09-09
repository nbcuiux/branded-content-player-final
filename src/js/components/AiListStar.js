import React, { Component, PropTypes } from 'react';

import newId from '../client/utils/newid';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiListStar extends Component {

	static propTypes = {
		starred: PropTypes.func,
		add: PropTypes.func,
		remove: PropTypes.func
	}

	constructor() {
		super();
	}

	componentWillMount() {
        this.id = newId();
    }

    handleClick = () => {
		!this.refs.star.checked ? (this.props.addAiStarred()) : (this.props.removeAiStarred())
    }

    handleChange = () => {

    }

	render() {
		const { addAiStarred, checkAiStarred, removeAiStarred } = this.props;

		return (
			<div className="starred-ai-list">
				<input id={this.id} type="checkbox" ref="star" checked={!checkAiStarred()}/>
				<label htmlFor={this.id} onClick={ this.handleClick }>
					<i className="iconcss icon-star"></i>
					<i className="iconcss icon-star-fill"></i>
				    <div className="circles-list"></div>
				</label>
			</div>
		)
	}
}