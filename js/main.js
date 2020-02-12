$(document).ready(function(){

  const arr = [$('.welcome'), $('.venue'), $('.agenda'), $('.reg')];

  $('.venue, .agenda, .reg').css({'display':'none'});
  $('.tap-section button').click(function () {
     var indexNo = $(this).index();

     arr[indexNo].css({ 'display':'block' })
     arr.filter(n => n.selector !== arr[indexNo].selector).forEach((e) => {
       e.css({ 'display':'none' })
     })
  })

  $('#register-btn').click(function(){
    console.log("register-btn clicked!");
    $('.reg').css({ 'display':'block' })
    $('.welcome, .venue, .agenda').css({ 'display':'none' });
  })
})
