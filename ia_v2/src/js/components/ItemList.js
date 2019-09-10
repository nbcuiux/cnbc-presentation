import React, { Component, PropTypes } from 'react';
import classNames from "classnames"
import $ from "jquery"

export default class ItemList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			openItemIndex: null
		}
	}

	toggleOpen = (itemIndex) => {

		let item = this.props.list.items[itemIndex];
		let ref = item.ref;
		this.props.open(item);

		/*
		if (this.props.highlightedRef === ref) {

			if (this.props.highlight) {
				this.props.highlight(null);
			}

		}
		else {
			if (this.props.highlight) {
				this.props.highlight(ref);
			}
		}
		*/
	}

	render() {

		let {highlightedRef, highlight, openItem } = this.props;
		let {title, items} = this.props.list;
		let {openItemIndex} = this.state;
		let hasHighlighted = items.filter((item)=> item.ref === highlightedRef ).length > 0


		console.log("The open item", openItem);

		let classnames = classNames({
			'nav--has-highlighted': hasHighlighted
		})

		return (
			<nav className={classnames}>
				<span className="category">{ title }</span>
				{
					items.map((item, index) => {
						let isOpen = openItem === item.id;
						let isHighlighted = highlightedRef === item.ref;
						let isPulsating = (!isOpen && isHighlighted && item.description);
						return <Item 
							item={item} 
							key={index} 
							index={index} 
							toggleOpen={this.toggleOpen} 
							isOpen={isOpen}
							isHighlighted={isHighlighted}
							isPulsating={isPulsating}
							highlight={highlight} />
					})
				}
			</nav>
		)
	}

}


class Item extends Component {

	onBoxClick = (e) => {
		this.props.toggleOpen(this.props.index);
	}

	componentDidMount() {
		this.updateOpen();
	}

	componentDidUpdate(prevProps) {
		this.updateOpen();
	}

	updateOpen() {
		let descWrapper = $(this.refs.descWrapper);
		let desc = $(this.refs.desc);
		let descInner = $(this.refs.descInner);

		if (this.props.isOpen) {
			let height = descInner.innerHeight();
			descWrapper.height(height);
			desc.height(height);
		}
		else {
			descWrapper.height(0);
			desc.height(0);
		}		
	}

	render() {

		let { item, isOpen, isHighlighted, isPulsating } = this.props;

		let classnames = classNames({
			'item': true,
			'item--open': isOpen,
			'item--has-desc': item.description,
			'item--highlighted': isHighlighted,
			'item--deleted': item.toBeDeleted,
			'item--pulsating': isPulsating,
		}, 'item--ref-' + item.ref)

		let name = item.description ? "*" + item.name : item.name;

		return (

			<div className={classnames} ref="container">
				<div className="item-box" onClick={this.onBoxClick}>
					<div className="item-box__inner">
						{ name }
						{
							item.ref > -1 ?
								<sup>{item.ref}</sup>
							: 
								null
						}
					</div>
				</div>
				{
					item.description ?
						<div className="item-desc-wrapper" ref="descWrapper">
							<div className="item-desc" ref="desc">
								<div className="item-desc-inner" ref="descInner">
									{item.description}
								</div>
							</div>
						</div>
					:
						null
				}
			</div>
		)
	}




}