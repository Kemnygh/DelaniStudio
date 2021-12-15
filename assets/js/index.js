$('document').ready(()=>{
  active();
  animateLogo();
  animateParagraph();
  toggleService();

  

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
function animateLogo(){
  var img = $('.logo')
  var look = 0
 

  img.animate({height: '300px', opacity: '0.4'}, "slow");
  img.animate({height: '100px', opacity: '1'}, "slow");

}

function animateParagraph(){
  $('.tagline').on('disappear',()=>{$('.tagline').fadeOut(4000,()=>{$('.tagline').trigger('appear')})});
  $('.tagline').on('appear',()=>{
    $('.tagline').fadeIn(2000,()=>{
      $('.tagline').trigger('disappear')
    });
  });
  // $('.tagline').on('anim2',()=>{$('.tagline').stop(false,()=>{$('.tagline').trigger('anim3')})});
  // $('.tagline').on('anim3',()=>{$('.tagline').animate({left:"82%"},"slow",()=>{$('.tagline').trigger('anim4')})});
  // $('.tagline').on('anim4',()=>{$('.tagline').hide('slow',()=>{$('.tagline').trigger('anim1')})});

  $('.tagline').trigger('appear')
}

function toggleService(){
  $('.design').click(()=>{
    $('.design-icon').toggle(500);
    $('.design-text').toggle(500);


    // $('.design').append('<p>Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.</p>');
      // $('.design').append('<p>Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.</p>');
    
  })

  $('.btn').click((e)=>{
    e.preventDefault();
  })
}