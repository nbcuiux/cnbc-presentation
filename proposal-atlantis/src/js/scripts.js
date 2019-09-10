// Smooth Scroll
//= ../lib/smoothscroll.js

// Sticky Kit
//= ../lib/sticky-kit.js

//= jquery.accordion.js

//= table.js

//= modernizr.js

//= jquery.easing.1.3.js

//= user-animation.js

//= triggers.js

//= Stickytable.min.js

//= jquery.stickytableheaders.js

	// Stickvy table
	/*
	var el = document.querySelector("table");
	var stickytable = new Stickytable(el, {
	    height: "500px",
	    width: "100%"
	});
*/
$(function() {
    $('#st-accordion').accordion();
    $('#st-accordion2').accordion();
  });

  $(document).ready(function() {

/*
  var el = document.querySelector("table");
  var stickytable = new Stickytable(el, {
      height: "500px",
      width: "100%"
  });

*/
    var s = skrollr.init();

    var currIndex = null;
    var $sections = $(".sections > *");

    var introTexts = [
    	{
    		word: "meaningful",
    		editor: "Will",
    		color: "#24b37a"
    	},
    	{
    		word: "persuasive",
    		editor: "Jo",
    		color: "#FF2E2E"
    	},
    	{
    		word: "impactful",
    		editor: "Stephanie",
    		color: "#3680EA"
    	}
    ]

    var headingIndex = 0;

    startTypeAnimation(introTexts[headingIndex]);

    function startTypeAnimation(item) {
      var i = 0;
      var typeLength = item.word.length;
      $(".heading-typed").text("");
      $(".heading-editor-replace").text(item.editor);
      $(".heading-editor").css({
      	backgroundColor: item.color
      });
      $(".heading-background").css({
      	backgroundColor: item.color
      });
      var typeInterval = setInterval(function() {

        var text = item.word.slice(0, i);
        $(".heading-typed").text(text);
        i++;
        if (i > typeLength + 1) {
          clearInterval(typeInterval);
          headingIndex++;
          if (headingIndex === introTexts.length) {
            headingIndex = 0;
          }
          setTimeout(function() {
            startTypeAnimation(introTexts[headingIndex])
          }, 2000);
        }
      }, 100);
    }



    $sections.each(function(index,el) {
      let nextIndex;
      $(this).waypoint({
        handler: function(direction) {
          if (direction === "up") {
            nextIndex = index - 1;
          } else {
            nextIndex = index
          }
          updateNav(nextIndex);
        },
        offset: 75
      })

      // place a waypoint at the botto of the page
      if (index === $sections.length - 1) {

        $(this).waypoint({
          handler: function(direction) {
            if (direction === "down") {
              nextIndex = index
            } else {
              nextIndex = index - 1
            }
            updateNav(nextIndex);
          },
          offset: 'bottom-in-view'
        })

      }

    });

    function updateNav(nextIndex) {
      if (nextIndex === currIndex) {
        return;
      }
      $(".nav-item-scroll.active").removeClass("active");
      if (nextIndex === -1) {
        $(".current-section").text("");
        $("body").addClass("at-top");
      } else {
        console.log(nextIndex);
        var $navitem = $(".nav-item-scroll").eq(nextIndex);
        $navitem.addClass("active");
        navTransition($navitem.text());
        $("body").removeClass("at-top");
        $(".nav-item-scroll-to-bottom").removeClass("active");
      }

      if (nextIndex >= 10) {
        var $navitem = $("[href='#" + nextIndex + "']");
        console.log($navitem);
        if (window.innerWidth > 800) {
          $(".current-section").text("");
          $("body").addClass("at-top"); 
        }
        $navitem.addClass("active");
      }

      currIndex = nextIndex;
    }


    function navTransition(nextItem) {
      var $elToLeave;
      $elToLeave = $(".current-section").find(".current-section__curr");
      $elToLeave.addClass("leaving");
      setTimeout(function(){
        $elToLeave.remove();
      }, 500);
      $(".current-section").append("<span class='current-section__curr'>" + nextItem + "</span>");
    }


    $(".nav-item-scroll").click(function (e) {
      e.preventDefault();
      var index = $(this).index();
      var href = $(this).attr("href");
      var section;
      console.log("The href", href);
      if (href) {
        section = $sections.eq(parseInt(href.slice(1)));
      }
      else {
        section = $sections.eq(index);
      }

      $("html, body").animate({
        scrollTop: section.offset().top - 67
      });
      $("body").removeClass("nav-open");
    });

    $(".nav-item-scroll-to-bottom").on("click", function() {
      $("html, body").animate({
        scrollTop: $("body").height()
      });
    })



    $(".hamburger").on("click", function() {
      $("body").toggleClass("nav-open");
    });




    $(".dynamic-video").each(function() {
      var video = this;
      video.pause();
    });

    $(".waypoint-video").each(function() {
    	var $this = $(this);
    	var video = this;
    	video.pause();
    	setTimeout(function() {
	      $this.waypoint({
	        handler: function(direction) {
	          if (direction === "up") {
	            video.play();
	          } else {
	          	video.pause();
	          }
	        },
	        offset: 0
	      })

	      $this.waypoint({
	        handler: function(direction) {
	          if (direction === "up") {
	          	video.pause();
	          } else {
	            video.play();
	          }
	        },
	        offset: 'bottom-in-view'
	      });
	    }, 150);
    });


    // Sticky tablr eaypoint

    var $table = $("#thetable");
    $table.waypoint({
      handler: function(direction) {
        if (direction === "up") {
          $("body").removeClass("table-is-sticky")
        } else {
        	$("body").addClass("table-is-sticky")
        }
      },
      offset: 0
    })

    $table.waypoint({
      handler: function(direction) {
        if (direction === "up") {
        	$("body").addClass("table-is-sticky")
        } else {
          $("body").removeClass("table-is-sticky")
        }
      },
      offset: function() {
		    return -this.element.clientHeight
		  }
    });


    updateNav(-1);


  });
