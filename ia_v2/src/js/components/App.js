import React, { Component, PropTypes } from 'react';
import ItemList from './ItemList';
import $ from "jquery"
import classNames from "classnames"

let itemListsLeft = [
	{
		title: "Pages",
		items: [
			{
				ref: 1,
				name: "News Story"
			},
			{
				ref: 2,
				name: "Blog Post"
			},
			{
				ref: 3,
				name: "Slideshow"
			},
			{
				ref: 4,
				name: "Partner story"
			},
			{
				ref: 5,
				name: "Advertorial",
				description: "Advertorial becomes a simple flag placed in the News Story content type. The flag can be applied all across the content type in the future; any content type can become advertorial and used for sponsorship with the flag on.",
				toBeDeleted: true
			},
			{
				ref: 6,
				name: "Episode"
			},
			{
				ref: 7,
				name: "Press Release"
			},
			{
				ref: 8,
				name: "Quiz Entry"
			},
			{
				ref: 9,
				name: "Wire story"
			},
		]
	},
	{
		title: "MEDIA",
		items: [
			{
				ref: 10,
				name: "Image"
			},
			{
				ref: 11,
				name: "Video"
			},
			{
				ref: 12,
				name: "Chart"
			},
			{
				ref: 13,
				name: "Audio"
			},
			{
				ref: 14,
				name: "Editorial File"
			},
			{
				ref: 11,
				name: "Flash",
				description: "Existing Flash files (.swf) will be treated as Videos and remain in the system for reference. No new Flash files can be created in BEE.",
				toBeDeleted: true
			},
			{
				ref: 16,
				name: "Poll",
				description: "Polls are transitioned into BEE as Page content type. It needs further exploration on whether they are editorially valuable."
			},
			{
				ref: 17,
				name: "Webservice",
				description: "All the services that Webservice supported (e.g. YouTube, Twitter, etc.) would be now supported within the text editor of each content type. Users can easily embed the assets using either the embed code or URL. Any other use cases or downstream impacts are to be considered.",
				toBeDeleted: true
			},
			{
				ref: 18,
				name: "Webresource",
				description: "Webresources are transitioned into Promos, where Prime Editors can upload an image, internal and/or external link, title, and description. Any other use cases and downstream impacts are to be considered."
			},
			{
				ref: 19,
				name: "Wild card",
				description: "Wild Cards that create an entire page are transitioned to Catchall Pages. Another use case for Wild Card is the sections within a page, which we still need to address."
			}
		]
	},
	{
		title: "Sections",
		items: [
			{
				ref: 20,
				name: "Source"
			},
			{
				ref: 21,
				name: "Franchise",
				description: "Franchises are transitioned into several different types based on the use cases. Categories of articles are simplified to Sections, custom pages are created with Collections, and any TV/Prime show and season Franchises would be created with Series or Season nodes in BEE."
			},
			{
				ref: 22,
				name: "Creator",
				description: "Creators are transitioned into Authors, which will hold all user configuration, such as name, role, photo, social account, etc."
			},
			{
				ref: 23,
				name: "Person"
			},
			{
				ref: 24,
				name: "Organization"
			},
			{
				ref: 25,
				name: "Company"
			},
			{
				ref: 26,
				name: "Place"
			},
			{
				ref: 27,
				name: "Event"
			}
		]
	},
	{
		title: "Utilities",
		items: [
			{
				ref: 28,
				name: "Saved Search",
				description: "Saved Search will become a feature in a search, which will store the users' latest and frequent keywords. The ability for the users to save a set of criteria would also be explored.",
				toBeDeleted: true

			},
			{
				ref: 29,
				name: "Skin",
				description: "Skins can be a part of templates that the general user selects, and only the advanced user can create and attach .css files to the templates.",
				toBeDeleted: true

			},
			{
				ref: 30,
				name: "Editorial Search",
				description: "Editorial Search is transitioned into Dynamic Collection, which will hold the criteria of content types to be inserted in the page."
			},
			{
				ref: 31,
				name: "File",
				description: "Files, which hold code files that are attached to Skin, are no longer exposed to the regular users.",
				toBeDeleted: true
			},
			{
				ref: 32,
				name: "Markup Template",
				description: "Markup Templates, which hold .tpl files that configures the front-end templates, are no longer exposed to the regular users as a file type. Instead, templates will exist as resources, and users can apply the templates only from a specific Template field.",
				toBeDeleted: true
			},
			{
				ref: 33,
				name: "Project"
			},
			{
				ref: 34,
				name: "Product",
				description: "Product will be retired as it is not currently serving any functionality.",
				toBeDeleted: true
			},
			{
				ref: 35,
				name: "Promotinal package",
				description: "Promotional Package will be retired as it is not currently serving any functionality. Users can use Project instead to group the articles for a specific need. Any other use cases and downstream impacts to be considered.",
				toBeDeleted: true
			},
			{
				ref: 36,
				name: "Security"
			},
			{
				ref: 37,
				name: "Team"
			},
			{
				ref: 38,
				name: "Usage rule",
				description: "Usage Rules are transitioned into simple switches in all content types of BEE. Users can turn the switch settings on or off based on their needs.",
				toBeDeleted: true
			}
		]
	}
]

let itemListsRight = [
	{
		title: "Pages",
		items: [
			{
				ref: 1,
				name: "News Story"
			},
			{
				ref: 2,
				name: "Blog Post"
			},
			{
				ref: 3,
				name: "Gallery"
			},
			{
				ref: 4,
				name: "Partner story"
			},
			{
				ref: 7,
				name: "Press release"
			},
			{
				ref: 1,
				description: "Breaking News is a new page type that specifically handles Breaking News. It allows the Hot Seat editors to publish out breaking news faster.",
				name: "Breaking news"
			},
			{
				ref: 8,
				name: "Quiz"
			},
			{
				ref: 16,
				name: "Poll"
			},
			{
				ref: 9,
				name: "Wire story"
			},
			{
				ref: 19,
				name: "Catchall page",
				description: "Catchall Pages hold custom HTML/CSS/JavaScript codes that create a stand-alone page."
			},
			{
				ref: 21,
				name: "TV/PRIME - Series",
				description: "Series is a new TV/Prime type that stores the relevant information of a TV show. It also serve as a reference to Season and Episode nodes."
			},
			{
				ref: 21,
				name: "TV/PRIME - Season",
				description: "Season is a new TV/Prime type that stores the relevant information of a TV show's season. It also serve as a reference to Series and Episode nodes."
			},
			{
				ref: 6,
				name: "TV/PRIME - Episode",
				description: "Episode node will store the relevant information of a TV show's episode, including references to appropriate Series and Season. It also provides episode synopsis and reference to the episode trailers and full video."
			},
			{
				ref: 18,
				name: "TV/PRIME - Promo",
				description: "Promo holds information that can go on a single item on the carousel: links, image, and promotional texts."
			}
		]
	},
	{
		title: "Media",
		items: [
			{
				ref: 10,
				name: "Image"
			},
			{
				ref: 11,
				name: "Video"
			},
			{
				ref: 12,
				name: "Chart"
			},
			{
				ref: 13,
				name: "Audio"
			},
			{
				ref: 14,
				name: "File"
			}
		]
	},
	{
		title: "Category",
		items: [
			{
				ref: 21,
				name: "Section",
				description: "Sections in BEE represent categories of articles."
			},
			{
				ref: 23,
				name: "Person"
			},
			{
				ref: 24,
				name: "Organization"
			},
			{
				ref: 25,
				name: "Company"
			},
			{
				ref: 26,
				name: "Place"
			},
			{
				ref: 27,
				name: "Event"
			},
			{
				ref: 36,
				name: "Security",
				description: "Securities will exist as references in BEE. We will explore what data can be stored in CMS and what can be stored as GDS data. Also, consider removing the Company asset that has the matching name when a new GDS security gets ingested."
			}
		]
	},
	{
		title: "List",
		items :[
			{
				ref: 21,
				name: "Curated Collection",
				description: "In a Curated Collection, users can manually select and specify and the order of the items on a page, e.g. list of artcies on the left rail on the homepage; carousel on a show page. It is equivalent to the Output List under Franchise in Toolbelt."
			},
			{
				ref: 30,
				name: "Dynamic Collection",
				description: "In a Dynamic Collection, users can set criteria to dynamically gather the items on a page, e.g. latest episodes. It is equivalent to Editorial Search and Feed in Toolbelt."
			},
			{
				ref: 21,
				name: "Collection Group",
				description: "A Collection Group is a group of collections/lists that composes a page on the front-end application. e.g. U.S. Homepage. It is equivalent to Franchise in Toolbelt, only with more specified groups of items in the Output List and Feed."
			}
		]
	},
	{
		title: "Internal data",
		items: [
			{
				ref: 20,
				name: "Source"
			},
			{
				ref: 22,
				name: "Author",
				description: "Author type will hold information of all the authors that can be filled in byline."
			},
			{
				ref: 33,
				name: "Project",
				description: "Project will group articles that belong to the same project/initiative, especially for native contents. This grouping can be used in a meaningful way, e.g. send Slack notification to the corresponding project channel. Explore ways to make association between a Project and an article."
			},
			{
				ref: 37,
				name: "Team"
			}
		]
	}
]



let itemIds = 0;

function assignIds(lists) {
	lists.forEach((list, index) => {
		list.items.forEach((item) => {
			item.id = itemIds;
			itemIds++;
		})
	})
}

assignIds(itemListsRight);
assignIds(itemListsLeft);


function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}



export default class App extends Component {


	static defaultProps = {
		itemListsLeft: itemListsLeft,
		itemListsRight: itemListsRight
	}

	constructor(props) {
		super(props);
		this.state = {
			highlightedRef: null,
			leftOpenItem: null,
			rightOpenItem: null
		}
	}

	highlight = (ref) => {
		console.log("trying to higlit", ref);

		this.setState({
			highlightedRef: ref
		})
	}

	open = (item) => {

		let ref= item.ref;
		let id = item.id;

		if (this.state.leftOpenItem === id || this.state.rightOpenItem === id) {
			// close it
			this.setState({
				highlightedRef: null,
				leftOpenItem: null,
				rightOpenItem: null
			})
			return;
		}

		// Get all left selected
		let leftSelectedItems = flatten(this.props.itemListsLeft.map(list => {
			let items = list.items;
			return items.filter(i=> i.ref === ref);
		}));

		let rightSelectedItems = flatten(this.props.itemListsRight.map(list => {
			let items = list.items;
			return items.filter(i=> i.ref === ref);
		}));

		// If our item is in the left list, choose that for the left and 0 for the right
		let leftExists = leftSelectedItems.filter(i => i.id === id);
		if (leftExists.length > 0) {
			this.setState({
				highlightedRef: item.ref,
				leftOpenItem: item.id,
				rightOpenItem: rightSelectedItems.length > 0 ? rightSelectedItems[0].id : null
			})
			return;
		}

		// If our item is in the right list, choose that for the right and 0 for the left
		let rightExists = rightSelectedItems.filter(i => i.id === id);
		if (rightExists.length > 0) {
			this.setState({
				highlightedRef: item.ref,
				leftOpenItem: leftSelectedItems.length > 0 ? leftSelectedItems[0].id : null,
				rightOpenItem: item.id
			})
			return;
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.highlightedRef !== this.state.highlightedRef) {

			setTimeout(()=>{

				let leftItem = $("#container1 .item--open");
				if (leftItem.length > 0) {
					let leftOffsetTop = leftItem.first().position().top;
					console.log("The left offste top", leftOffsetTop);
					$("#container1").animate({
						scrollTop: leftOffsetTop - 300
					}, 500);
				}

				let rightItem = $("#container2 .item--open");
				if (rightItem.length > 0) {
					let rightOffsetTop = rightItem.first().position().top;
					console.log("The right offste top", rightOffsetTop);
					$("#container2").animate({
						scrollTop: rightOffsetTop - 300
					}, 500);
				}
			}, 250);
		}
	}

	render() {
		let {itemListsLeft, itemListsRight} = this.props;
		let {highlightedRef, leftOpenItem, rightOpenItem} = this.state;

		let classnames = classNames({
			'main': true,
			'main--has-selected': highlightedRef !== null
		})

		return (
			<div className={classnames}>
				<header>
					<a href="http://cnbc-ux.nbcuxlab.com/bee-architecture/">
						<img src="assets/img/back-arrow.svg" />
					</a>
					<h5>BEE + Toolbelt Data Types</h5>
				</header>
				<div className="content-wrapper">
					<div id="container1" className="container">
						<section className="color-1">
							<h1>TOOLBELT</h1>
							<h3>Data Types</h3>
							{
								itemListsLeft.map((list, index)=>{
									return <ItemList list={list} key={index} highlight={this.highlight} highlightedRef={highlightedRef} openItem={leftOpenItem} open={this.open} />
								})
							}
						</section>
					</div>
					<div id="container2" className="container">
						<section className="color-6">
							<h1>BEE</h1>
							<h3>Data Types</h3>
							{
								itemListsRight.map((list, index)=>{
									return <ItemList list={list} key={index} highlight={this.highlight}  highlightedRef={highlightedRef} openItem={rightOpenItem} open={this.open} />
								})
							}
						</section>
					</div>
				</div>
			</div>
		)
	}

}
