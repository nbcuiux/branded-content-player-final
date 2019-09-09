import React, { Component, PropTypes } from 'react';

import newId from '../client/utils/newid';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiPreviewStar extends Component {

	static propTypes = {
		add: PropTypes.func,
		remove: PropTypes.func,
		hideParent: PropTypes.func
	}

	constructor() {
		super();
	}

	componentWillMount() {
        this.id = newId();
    }

    handleClick = () => {
    	this.props.hideParent();
    	this.props.remove();
    	// setTimeout((() => this.props.remove()), 300);
    }

	render() {
		const { add, remove } = this.props;

		return (
			<div className="starred">
				<input id={this.id} type="checkbox" checked={true} ref="star"/>
				<label htmlFor={this.id} onClick={ this.handleClick }>
					<i className="iconcss icon-star"></i>
					<i className="iconcss icon-star-fill"></i>
				    <div className="circles"></div>
				</label>
			</div>
		)
	}
}