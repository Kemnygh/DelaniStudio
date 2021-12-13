$('document').ready(()=>{
  active();
  anim();
  // $('.tagline').show(1000).animate({left:"42%"},"1000").animate({left:"100%"})

  // $('.tagline').on('appear',()=>{$(this).show(1000,"slow",()=>{$(this).trigger('anim1')})});
  $('.tagline').on('anim1',()=>{
    $('.tagline').animate({left:"42%"},'slow',()=>{
      $('.tagline').trigger('anim2')
    });
  });
  $('.tagline').on('anim2',()=>{$('.tagline').stop(false,()=>{$('.tagline').trigger('anim3')})});
  $('.tagline').on('anim3',()=>{$('.tagline').animate({left:"82%"},"slow",()=>{$('.tagline').trigger('anim4')})});
  $('.tagline').on('anim4',()=>{$('.tagline').hide('slow',()=>{$('.tagline').trigger('anim1')})});

  $('.tagline').trigger('anim1')

});

// active nav item

function active(){
  var navlink = document.getElementsByClassName("nav-link");
function color() {
  for(var i = 0; i < navlink.length; i++){
    if(this != navlink[i]){
      navlink[i].style.color = "white";
    }else{
      navlink[i].style.color = "orange";
    }
  }
}
[].forEach.call(navlink, function(div) {
  div.addEventListener('click', color);
})

  
}
function anim(){
  var img = $('.logo')
  var look = 0
 

  img.animate({height: '300px', opacity: '0.4'}, "slow");
  // img.animate({width: '300px', opacity: '0.8'}, "slow");
  img.animate({height: '100px', opacity: '1'}, "slow");
  // img.animate({width: '100px', opacity: '0.8'}, "slow");

}