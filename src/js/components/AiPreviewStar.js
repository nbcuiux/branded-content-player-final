import React, { Component, PropTypes } from 'react';

import newId from '../client/utils/newid';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiPreviewStar extends Component {

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
		!this.refs.star.checked ? (this.props.add()) : (this.props.remove())
    }

    handleChange = () => {

    }

	render() {
		const { starred, add, remove } = this.props;

		return (
			<div className="starred">
				<input id={this.id} type="checkbox" ref="star" checked={!starred()}/>
				<label htmlFor={this.id} onClick={ this.handleClick }>
					<i className="iconcss icon-star"></i>
					<i className="iconcss icon-star-fill"></i>
				    <div className="circles"></div>
				</label>
			</div>
		)
	}
}