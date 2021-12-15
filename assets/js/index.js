$('document').ready(()=>{
  active();
  animateLogo();
  animateParagraph();
  toggleService();
  userInput();

  

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
  $('.tagline').on('disappear',()=>{
    $('.tagline').fadeOut(4000,()=>{
      $('.tagline').trigger('appear')})});

  $('.tagline').on('appear',()=>{
    $('.tagline').fadeIn(2000,()=>{
      $('.tagline').trigger('disappear')
    });
  });

  $('.tagline').trigger('appear')
}

function toggleService(){
  $('.design').click(()=>{
    $('.design-icon').toggle();
    $('.design-text').toggle();
    $('.design-grp').toggle()    
  });

  $('.dev').click(()=>{
    $('.dev-icon').toggle();
    $('.dev-text').toggle();
    $('.dev-grp').toggle()    
  });

  $('.prod').click(()=>{
    $('.prod-icon').toggle();
    $('.prod-text').toggle();
    $('.prod-grp').toggle()    
  });

 
}

function userInput(){
  var myStorage = window.localStorage;

  $('.contact-form').submit((e)=>{
    e.preventDefault();
    var nameInput = $('#name').val();
    var emailInput = $('#email').val();
    var msgInput = $('#msg').val();
    var name = $('#name')
    var email = $('#email')
    var msg = $('#msg')
    var nameError = $('.name-valid')
    var emailError = $('.email-valid')
    var msgError = $('.msg-valid')
    var inputTag = [name,email,msg];
    var inputs = [nameInput,emailInput,msgInput];
    var errorTag = [nameError,emailError,msgError]
    var errors = ['Please enter your name','Please enter your email','Please enter your message'];

   var inputData = ''
    
    for(var i = 0; i < errors.length; i++ ){
      if(inputs[i] === ''){
        errorTag[i].text(errors[i])
        inputTag[i].addClass('input-area')
      }else{
        errorTag[i].text('')
        inputTag[i].removeClass('input-area')
        inputData += inputs[i]+'|'
       
    }
    } 
    if(nameInput !=='' && emailInput !== '' && msgInput !== ''){
      console.log(inputData)
    // myStorage.setItem($.now(),inputData)
  }
    
  });
}