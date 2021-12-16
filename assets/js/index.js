$('document').ready(()=>{
  active();
  animateLogo();
  animateParagraph();
  toggleService();
  highlighter()
  userInput();
  filter();
  

});

// active nav item

function active(){
  var navlink = document.getElementsByClassName("nav-link");
function color() {
  for(var i = 0; i < navlink.length; i++){
    if(this != navlink[i]){
      navlink[i].style.color = "#cec8c8";
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
    $('.design-grp').toggle();  
  });

  $('.dev').click(()=>{
    $('.dev-icon').toggle();
    $('.dev-text').toggle();
    $('.dev-grp').toggle();   
  });

  $('.prod').click(()=>{
    $('.prod-icon').toggle();
    $('.prod-text').toggle();
    $('.prod-grp').toggle(); 
  });

 
}

function highlighter(){
  var portfolios = $('.work-img')
  var labels =  $('.pflo-img-div')

   labels.each(function(i){
    $(this).mouseenter(()=>{
      $(this).removeClass('transparent')
      if(this === labels[i]){
        portfolios.each(function(e){
          if(i === e){
          $(this).addClass('dark-shade')
          }
        });
      }
    });
    
    $(this).mouseleave(()=>{
      $(this).addClass('transparent')
      if(this === labels[i]){
        portfolios.each(function(e){
          if(i === e){
          $(this).removeClass('dark-shade')
          }
        });
      }
    });
  });

  
  

}

function userInput(){
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

   var inputData = []
    
    for(var i = 0; i < errors.length; i++ ){
      if(inputs[i] === ''){
        errorTag[i].text(errors[i])
        inputTag[i].addClass('input-area')
      }else{
        errorTag[i].text('')
        inputTag[i].removeClass('input-area')
        inputData.push(inputs[i])
       
    }
    } 
    if(nameInput !=='' && emailInput !== '' && msgInput !== ''){
      $('.alert').show();
      $('.alert-span').text('Thank you '+inputData[0]+' for reaching out to us, your message has been well received, we will get back to you promptly.');
      $('.contact-form')[0].reset();

      let fetchdata = {
        method: 'POST',
        body: JSON.stringify({clientName: nameInput,clientEmail: emailInput, text: msgInput, js: true}),
        headers: {"content-Type": "application/json"}
      }
      fetch('/contact', fetchdata)
        // .then(res =>{
        //   if(res.ok){
            
        //   }else{
        //     console.log("there's a problem")
        //   }
        // })
    }
    
  });
}

function filter(){
  var items = $('.filter-item');
  var projects = $('.pflo-img');
  var website = $('.website');
  var app = $('.app');
  var graphics = $('.graphics');
  var logos = $('.logos');

  items.each(function(i){
    $(this).click(function(){
      if(this === items[i]){
        $(this).addClass('filter-bold')
        $(this).css("text-decoration","underline")
        items.each(function(e){
          if(i !== e){
            $(this).removeClass('filter-bold')
            $(this).css("text-decoration","none")
          }
        })
      }
    })
   })

  $('.filter-logo').click(function(){
    website.hide();
    app.hide();
    graphics.hide();
    logos.show()
  })

  $('.filter-websites').click(function(){
    logos.hide();
    app.hide();
    graphics.hide();
    website.show();
  })

  $('.filter-app').click(function(){
    website.hide();
    logos.hide();
    graphics.hide();
    app.show();
  })

  $('.filter-graphics').click(function(){
    website.hide();
    app.hide();
    logos.hide();
    graphics.show();
  })

  $('.filter-all').click(function(){
    website.show();
    app.show();
    graphics.show();
    logos.show();
  })
}