
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.menu__body').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $('.main-screen').toggleClass('active');
    // $('.dark-block').toggleClass('active')
    $('body').toggleClass('lock');
  })
});


$(document).ready(function(){
$(".main-screen").slick({
  dots:true,
  arrows:false,
  draggable:false,
  // adaptiveHeight:true,
});
$('.rightArrow').click(function(event){
  $('.main-screen').slick('slickNext')
});
$('.leftArrow').click(function(event){
  $('.main-screen').slick('slickPrev')
});
});

$(document).ready(function(){
  $(".posts_news").slick({
    arrows:false,
    slidesToShow:3,
    variableWidth:true,
    waitForAnimate:false,
  });
  $('.fa-chevron-right').click(function(event){
    $('.posts_news').slick('slickNext')
  });
  $('.fa-chevron-left').click(function(event){
    $('.posts_news').slick('slickPrev')
  });
  });


 


//scroll

window.addEventListener('scroll', function() {
  menu.hidden = (pageYOffset < 200);
});

window.addEventListener('scroll', function(e) {
  var el = document.querySelector('.progress');
  if (window.scrollY + window.outerHeight - 1  > el.offsetTop) {

    animatePercent();

  }
});

function animatePercent() {
	$('#num1').animate({
    num: 3587
  }, {
    duration: 5000,
    step: function(num) {
      this.innerHTML = (num).toFixed(0) 
    }
  });
  $('#num2').animate({
    num: 207
  }, {
    duration: 5000,
    step: function(num) {
      this.innerHTML = (num).toFixed(0) 
    }
  });
  $('#num3').animate({
    num: 2500
  }, {
    duration: 5000,
    step: function(num) {
      this.innerHTML = (num).toFixed(0) 
    }
  });
  $('#num4').animate({
    num: 873
  }, {
    duration: 5000,
    step: function(num) {
      this.innerHTML = (num).toFixed(0) 
    }
  });
  $('#num5').animate({
    num: 900
  }, {
    duration: 5000,
    step: function(num) {
      this.innerHTML = (num).toFixed(0) 
    }
  });
}


// $(function(){
//   $(".progress").viewportChecker({
//   callbackFunction:function(){
//     $('#num1').animate({ num: 90 - 3/* - начало */ }, {
//       duration: 5000,
//       step: function (num){
//           this.innerHTML = (num + 3).toFixed(9) + '%'
//       }
//   });
//   }
//   });
//   });




//filter
$(function(){
  let filter= $("[data-filter]");
  filter.on("click",function(event){
    event.preventDefault()
    let cat= $(this).data('filter')
    if(cat == "all"){
      $('[data-cat]').removeClass('hide')
    }else{
      $("[data-cat]").each(function(){
      let item=$(this).data('cat')
      if(item.indexOf(cat)<0){
        $(this).addClass('hide')
      }else{
        $(this).removeClass('hide')
      }
        })
    }  
  })
})
