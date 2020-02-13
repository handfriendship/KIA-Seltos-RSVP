$(document).ready(function(){

  const arr = [$('.welcome'), $('.venue'), $('.agenda'), $('.reg')];

  $('.venue, .agenda, .reg').css({'display':'none'});
  $('.tap div').click(function () {
     var indexNo = $(this).index();
     $('.tap div.toggle-tap').removeClass('toggle-tap');
     $(this).addClass('toggle-tap');

     arr[indexNo].css({ 'display':'block' })
     arr.filter(n => n.selector !== arr[indexNo].selector).forEach((e) => {
       e.css({ 'display':'none' })
     })
  })

  $('#register-btn').click(function(){
    $('.reg').css({ 'display':'block' })
    $('.welcome, .venue, .agenda').css({ 'display':'none' });
  })
})
