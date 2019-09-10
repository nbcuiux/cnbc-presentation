import React, { Component, PropTypes } from 'react';
import _ from "underscore";
import imageMapResize from "../vendor/imageMapResizer.js"
import SlideDown from "./SlideDown"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

let clickTargets = [

	{
		toolbeltName: "Body",
		beeName: "Body",
		toolbeltImg: "tb-body.png",
		beeImg: "bee-body.png",
		toolbeltCaption: "Content > Body",
		beeCaption: "Body card",
		info: " ",
		group: "News Article",
		contentApiField: "articleBody",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},

	{
		toolbeltName: "Embedded Assets",
		beeName: "asset embed",
		toolbeltImg: "tb-embedded-asset.png",
		beeImg: "bee-embedded-asset.png",
		toolbeltCaption: "Content > Body > Embedded Asset",
		beeCaption: "Body card > embed asset in between paragraphs",
		info: "Instead of creating body groups to insert assets, users can simply embed assets in between paragraphs in BEE's text editor.",
		group: "News Article",
		contentApiField: "_embedded > widget, image, slideshow",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},

	{
		toolbeltName: "Title",
		beeName: "Title",
		toolbeltImg: "tb-title.png",
		beeImg: "bee-title.png",
		toolbeltCaption: "Content > Title",
		beeCaption: "General Info > Title",
		info: " ",
		group: "News Article",
		contentApiField: "headline",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Slug",
		beeName: "Slug",
		toolbeltImg: "tb-slug.png",
		beeImg: "bee-slug.png",
		toolbeltCaption: "Core > Slug. Slug field on the top is available in all tabs.",
		beeCaption: "General Info > Slug",
		info: " ",
		group: "News Article",
		contentApiField: "headlineAlternates > seoSlug",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Creator",
		beeName: "Byline",
		toolbeltImg: "tb-creator.png",
		beeImg: "bee-byline.png",
		toolbeltCaption: "Attribution > Creator, Attribution > Creator overwrite",
		beeCaption: "General Info > Byline",
		info: "Toolbelt had two separate fields for the Creator nodes that existing in the system and free text for external contributors. In BEE, both cases are handled with a single Byline field.",
		group: "News Article",
		contentApiField: "author",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Link Headline",
		beeName: "Link Headline",
		toolbeltImg: "tb-link-headline.png",
		beeImg: "bee-link-headline.png",
		toolbeltCaption: "Promotional View > Link Headline",
		beeCaption: "General Info > Link Headline",
		info: " ",
		group: "News Article",
		contentApiField: "headlineAlternates > coverHeadline",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "SEO Title",
		beeName: "SEO Title",
		toolbeltImg: "tb-seo-title.png",
		beeImg: "bee-seo-title.png",
		toolbeltCaption: "Content > SEO Title",
		beeCaption: "SEO > SEO Title",
		info: " ",
		group: "News Article",
		contentApiField: "headlineAlternates > seoHeadline",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Keywords",
		beeName: "Keywords",
		toolbeltImg: "tb-keywords.png",
		beeImg: "bee-keywords.png",
		toolbeltCaption: "Content > Keywords",
		beeCaption: "SEO > Keywords",
		info: " ",
		group: "News Article",
		contentApiField: "N/A",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Promo Assets",
		beeName: "Promo image",
		toolbeltImg: "tb-promo-assets.png",
		beeImg: "bee-media-promo.png",
		toolbeltCaption: "Promotional View > Promo Assets",
		beeCaption: "Media > image that has usage Promo",
		info: " ",
		group: "News Article",
		contentApiField: "_embedded > mainImage or _embedded > coverImage",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Tweet Override",
		beeName: "Twitter Link Headline",
		toolbeltImg: "tb-tweet-override.png",
		beeImg: "bee-twitter-link-headline.png",
		toolbeltCaption: "Promotional View > Tweet Override",
		beeCaption: "Social > Twitter > Link Headline",
		info: " ",
		group: "News Article",
		contentApiField: "headlineAlternates > socialMediaHeadline",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Franchise",
		beeName: "Sections",
		toolbeltImg: "tb-franchise.png",
		beeImg: "bee-sections.png",
		toolbeltCaption: "Content > Franchise",
		beeCaption: "Associations > Sections",
		info: " ",
		group: "News Article",
		contentApiField: "primarySection & Article: section",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Primary Assets",
		beeName: "Primary Tags",
		toolbeltImg: "tb-primary-assets.png",
		beeImg: "bee-primary-tags.png",
		toolbeltCaption: "Content > Primary Assets",
		beeCaption: "Associations > Primary Tags",
		info: " ",
		group: "News Article",
		contentApiField: "primaryTopic or Topic",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Related Assets",
		beeName: "Related Tags",
		toolbeltImg: "tb-related-assets.png",
		beeImg: "bee-related-tags.png",
		toolbeltCaption: "Content > Related Assets",
		beeCaption: "Associations > Related Tags",
		info: " ",
		group: "News Article",
		contentApiField: "Topic",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Team",
		beeName: "Team",
		toolbeltImg: "tb-team.png",
		beeImg: "bee-team.png",
		toolbeltCaption: "Project Management > Team",
		beeCaption: "Team and Project > Team",
		info: " ",
		group: "News Article",
		contentApiField: "New Requirement Specific to CNBC",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Project",
		beeName: "Project",
		toolbeltImg: "tb-project.png",
		beeImg: "bee-project.png",
		toolbeltCaption: "Project Management > Project",
		beeCaption: "Team and Project > Project",
		info: " ",
		group: "News Article",
		contentApiField: "New Requirement Specific to CNBC",
		contentApiFieldLink: "http://docs.newscontentapiv1.apiary.io/#reference/articles/article/retrieve-an-article"
	},
	{
		toolbeltName: "Favorite",
		beeName: "Favorites",
		toolbeltImg: "tb-favorites.png",
		beeImg: "bee-favorites.png",
		toolbeltCaption: "Favorite tab",
		beeCaption: "Dashboard > Favorites",
		info: "CNBC Tech team would need to build to the API in order to store Favorite information in Toolbelt before the article creation phase.",
		group: "Dashboard"
	},
	{
		toolbeltName: "History",
		beeName: "My Latest Activities",
		toolbeltImg: "tb-history.png",
		beeImg: "bee-my-latest-activities.png",
		toolbeltCaption: "History tab & user's action and date",
		beeCaption: "Dashboard > My Latest Activities",
		info: "My Latest Activities need to have information on all the contents that the user has edited, saved, or published. It shows the content item itself, what action the user took, and the time of the action. CNBC Tech team would need to build to the API in order to store the information in Toolbelt.",
		group: "Dashboard"
	},
	{
		toolbeltName: "Content History",
		beeName: "Status Tracker",
		toolbeltImg: "tb-article-history.png",
		beeImg: "bee-status-tracker.png",
		toolbeltCaption: "Each content's Core > history",
		beeCaption: "Dashboard > Status Tracker",
		info: "Status Tracker shows the activities that happens on a specific content, which is equivalent to the history of each content item in Toolbelt.  CNBC Tech team would need to build to the API in order to store the information in Toolbelt.",
		group: "Dashboard"
	},
	{
		toolbeltName: "n/a",
		beeName: "Latest Published Content",
		toolbeltImg: "tb-na.png",
		beeImg: "bee-latest-published-content.png",
		toolbeltCaption: "",
		beeCaption: "Dashboard > Latest Published Content",
		info: "Latest Published Content is the list of all the contents that are published in the CMS. When there is a publish activity triggered, it should be listed in the Latest Published Content section.",
		group: "Dashboard"
	},
	{
		toolbeltName: "n/a",
		beeName: "Article Statics",
		toolbeltImg: "tb-na.png",
		beeImg: "bee-article-statistics.png",
		toolbeltCaption: "",
		beeCaption: "Dashboard > Article Statistics",
		info: "Article statistics are coming from 3rd party sources, such as Omniture, Chartbeat, SocialFlow, etc.",
		group: "Dashboard"
	},
	{
		toolbeltName: "n/a",
		beeName: "Top Article Statics",
		toolbeltImg: "tb-na.png",
		beeImg: "bee-top-articles-statistics.png",
		toolbeltCaption: "",
		beeCaption: "Dashboard > Top Article Statistics",
		info: "Top Article Statistics are coming from 3rd party sources, such as Omniture, Chartbeat, SocialFlow, etc.",
		group: "Dashboard"
	},
	{
		toolbeltName: "n/a",
		beeName: "Statistics",
		toolbeltImg: "tb-na.png",
		beeImg: "bee-article-statistics.png",
		toolbeltCaption: "",
		beeCaption: "Dashboard > Statistics",
		info: "The sitewide statistics are coming from 3rd party sources, such as Omniture, Chartbeat, SocialFlow, etc.",
		group: "Dashboard"
	},
	{
		toolbeltName: "Slug",
		beeName: "Slug",
		toolbeltImg: "tb-img-slug.png",
		beeImg: "bee-img-slug.png",
		toolbeltCaption: "Core > Slug. Slug field on the top is available in all tabs.",
		beeCaption: "Metadata > Slug",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Title",
		beeName: "Title",
		toolbeltImg: "tb-img-title.png",
		beeImg: "bee-img-title.png",
		toolbeltCaption: "Content > View/Edit Metadata > Title",
		beeCaption: "Metadata > Title",
		info: "NOTE: There are two Title fields available in Toolbelt, so the use cases of both should be considered.",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Description",
		beeName: "Description",
		toolbeltImg: "tb-img-description.png",
		beeImg: "bee-img-description.png",
		toolbeltCaption: "Content > View/Edit Metadata > Description",
		beeCaption: "Metadata > Description",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Caption",
		beeName: "Caption",
		toolbeltImg: "tb-img-caption.png",
		beeImg: "bee-img-caption.png",
		toolbeltCaption: "Content > View/Edit Metadata > Caption",
		beeCaption: "Metadata > Caption",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Creator",
		beeName: "Creator",
		toolbeltImg: "tb-img-creator.png",
		beeImg: "bee-img-creator.png",
		toolbeltCaption: "Content > View/Edit Metadata > Creator",
		beeCaption: "Metadata > Creator",
		group: "Image Metadata"
	},
	{
		toolbeltName: "metadata field",
		beeName: "Tags",
		toolbeltImg: "tb-img-tag.png",
		beeImg: "bee-img-tags.png",
		toolbeltCaption: "Content > View/Edit Metadata > a metadata field",
		beeCaption: "Metadata > Tags",
		info: "Tags can be stored as a part of a metadata field with a specific convention. The field to use for tags should be determined.",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Source",
		beeName: "Source",
		toolbeltImg: "tb-img-source.png",
		beeImg: "bee-img-source.png",
		toolbeltCaption: "Content > View/Edit Metadata > Source",
		beeCaption: "Metadata > Source",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Source Filename",
		beeName: "Source Filename",
		toolbeltImg: "tb-img-source-filename.png",
		beeImg: "bee-img-source-filename.png",
		toolbeltCaption: "Content > View/Edit Metadata > Source Filename",
		beeCaption: "Metadata > Source Filename",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Width",
		beeName: "Width",
		toolbeltImg: "tb-img-width.png",
		beeImg: "bee-img-width.png",
		toolbeltCaption: "Content > View/Edit Metadata > Width",
		beeCaption: "Metadata > Width",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Height",
		beeName: "Height",
		toolbeltImg: "tb-img-height.png",
		beeImg: "bee-img-height.png",
		toolbeltCaption: "Content > View/Edit Metadata > Height",
		beeCaption: "Metadata > Height",
		group: "Image Metadata"
	},
	{
		toolbeltName: "Crops Preview",
		beeName: "Crop Preview",
		toolbeltImg: "tb-img-crops-preview.png",
		beeImg: "bee-img-crop.png",
		toolbeltCaption: "Content > Crops Preview",
		beeCaption: "Focal Point or Focal Rectangle > Crop Preview",
		group: "Image Metadata"
	}
]





export default class App extends Component {


	static defaultProps = {
		clickTargets: clickTargets.map((item,index)=> {
			item.id = index;
			return item;
		})
	}

	constructor(props) {
		super(props);
		this.state = {
			//currIndex: null,
			curr: null,
			selected: props.clickTargets[0],
			navOpen: false
		}
	}

	componentDidMount() {
		this.setupImgZoom();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.selected !== prevState.selected) {
			this.setupImgZoom();
		}
	}

	setupImgZoom() {
		$('.zoomContainer').remove();
		$(this.refs['img_l']).elevateZoom({
		  zoomType				: "inner",
		  cursor: "crosshair"
		});
		$(this.refs['img_r']).elevateZoom({
		  zoomType				: "inner",
		  cursor: "crosshair"
		});
	}

	clickArea = (index, e) => {
		console.log("The bounding rect", e.target.getBoundingClientRect() )
		e.preventDefault();
		let item = this.props.clickTargets[index];
		this.setState({
			currIndex: index
		})
		console.log("clicked on ", item);
	}

	openNav = () => {
		this.setState({
			navOpen: !this.state.navOpen
		})
	}


	selectItem = (item, e) => {
		this.setState({
			selected: item,
			navOpen: false
		})
	}


	render() {
		let tooltipStyle;
		let  {selected, navOpen} = this.state;
		let clickTargets = this.props.clickTargets;
		let grouped = _.groupBy(clickTargets, (item) => { return item.group });

		console.log("grouped", grouped);

		let currIndex = this.state.currIndex;
		if (currIndex !== null) {
		}

		return (
			<div className="main">

			<header>
				<a href="http://cnbc-ux.nbcuxlab.com/bee-architecture/">
					<img src="assets/img/back-arrow.svg" />
				</a>
				<h5><i className="nav-hamburger fa fa-bars" onClick={this.openNav} />BEE + Toolbelt Field Mapping</h5>
			</header>
				<div className={"nav" + (navOpen ? " nav--open" : "")}>

					<a href="http://cnbc-ux.nbcuxlab.com/bee-architecture/" className="nav-back">
						<img src="assets/img/back-arrow.svg" />
						<h3>BEE Architecture</h3>
					</a>
					{
						Object.keys(grouped).map(groupName => {
							return <NavGroup key={groupName} name={groupName} items={grouped[groupName]} selectItem={this.selectItem} selected={selected}/>
						})
					}
				</div>
				<ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={1100} transitionLeaveTimeout={1100}>
				{
					selected ?
						<div className="content" key={selected.id}>
							<div className="content-item">
								<div className="content-item__imgs">
									<div className="content-item__img-wrapper">
										<h1 className="content-item__title">
											Bee field: { selected.beeName }
										</h1>
												<img src={"assets/img/" + selected.beeImg } ref="img_r" data-zoom-image={"assets/img/" + selected.beeImg } />
										<div className="content-item__caption">{ selected.beeCaption }</div>
									</div>
									<div className="content-item__arrow">
										<i className="iconcss icon-right-arrow" />
									</div>
									<div className="content-item__img-wrapper">
										<h1 className="content-item__title">
											Toolbelt field: { selected.toolbeltName }
										</h1>
												<img src={"assets/img/" + selected.toolbeltImg } ref="img_l" data-zoom-image={"assets/img/" + selected.toolbeltImg }  />
										<div className="content-item__caption">{ selected.toolbeltCaption }</div>
									</div>

								</div>
								{
									selected.info ?
										<p className="content-item__info">
											<div className="article-info">
												{
													selected.contentApiField ?
														<div>
															<span className="api-heading">News Content API: </span><span className="api-link">{ selected.contentApiField }</span>
															<a href={ selected.contentApiFieldLink }><i className="fa fa-external-link-square"></i></a>
														</div>

													:
														null
												}
											</div>
											{ selected.info }
										</p>
									:
										null
								}
							</div>
						</div>
					:
						null

				}
				</ReactCSSTransitionGroup>

			</div>
		)
	}

}


class NavGroup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		}
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {

		let group = this.props.group;
		let name = this.props.name;
		let items = this.props.items;
		let selected = this.props.selected;

		let isOpen = this.state.isOpen;
		return (

			<div className={"nav-group" + (isOpen ? " nav-group--open" : "")}>
				<div className="nav-group__title" onClick={this.toggleOpen}>
					{name}
					<div className="chevron"></div>
				</div>
				<SlideDown isOpen={isOpen} duration={300}>
					<div className="nav-title">
						<div>Bee</div>
						<div>Toolbelt</div>
					</div>

					{
						items.map((target,index) => {
							return (

								<div className={"nav-item" + (selected === target ? " nav-item--active" : "")}
									key={index} onClick={this.props.selectItem.bind(this, target)}>
									<div className="nav-item__l">
										{target.beeName}
									</div>
									<div className="nav-item__r">
										{target.toolbeltName}
									</div>
									<div className="nav-item__arrow iconcss icon-right-arrow"></div>
								</div>
							)
						})
					}
				</SlideDown>
			</div>
		)
	}
}
