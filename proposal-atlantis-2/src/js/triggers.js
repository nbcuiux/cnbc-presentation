$(document).ready(function(){


  $(".dynamic-trigger").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index(); // Get the index of this item
    var $section = $(this).closest("section"); // Get the section parent
    $section.find(".dynamic-item.active").removeClass("active");
    var $itemToOpen = $section.find(".dynamic-item").eq(index);
    $itemToOpen.addClass("active");
    if ($itemToOpen.find("video").length > 0) {
      $itemToOpen.find("video")[0].play();
    }
  });

  /*
  $(".dynamic-trigger:first-child").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:first-child').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(2)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(2)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(3)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(3)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(4)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(4)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(5)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(5)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(6)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(6)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(7)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(7)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(8)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(8)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(9)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(9)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(10)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(10)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(11)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(11)').toggleClass('active').siblings().removeClass('active');
  });

  $(".dynamic-trigger:nth-child(12)").click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().siblings().children('.dynamic-item:nth-child(12)').toggleClass('active').siblings().removeClass('active');
  });
  */
    var topMargin = -100;
    $('.timeline-phase-1').on('click', function () {  
    var elemTo = $('.st-header').eq(0);
    $('html, body').animate({
      scrollTop: topMargin + elemTo.offset().top
    }, 500);
    });
    $('.timeline-phase-2').on('click', function () {  
    var elemTo = $('.st-header').eq(1);
    $('html, body').animate({
      scrollTop: topMargin + elemTo.offset().top
    }, 500);
    });
    $('.timeline-phase-3').on('click', function () {  
    var elemTo = $('.st-header').eq(2);
    $('html, body').animate({
      scrollTop: topMargin + elemTo.offset().top
    }, 500);
    });

    //onresize oninit
    
    function addSpaceBelow() {
      var phase3header = $('.st-header').eq(2).height();
      var phase3body = $('#st-accordion3').height();
      var windowH = $(window).height();
      console.log(windowH + " : " + phase3body + " : " + phase3header);
      var spacer = $('.spacer').css({ height : windowH - (phase3body) - 90 + 'px'});
    }
    addSpaceBelow();
    $(window).resize($.proxy(addSpaceBelow, this));


});
