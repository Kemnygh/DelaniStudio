$('document').ready(()=>{
  active();
  animate();
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
function animate(){
  img = $('.logo')
  img.animate({height: '300px', opacity: '0.4'}, "slow");
  // img.animate({width: '300px', opacity: '0.8'}, "slow");
  img.animate({height: '100px', opacity: '0.4'}, "slow");
  // img.animate({width: '100px', opacity: '0.8'}, "slow");
}