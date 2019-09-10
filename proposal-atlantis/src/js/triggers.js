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
});
