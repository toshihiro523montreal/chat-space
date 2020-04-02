$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main_chat__message-list__message">
         <div class="main_chat__message-list__message__header">
           <div class="main_chat__message-list__message__header__name">
             ${message.user_name}
           </div>
           <div class="main_chat__message-list__message__header__date">
             ${message.created_at}
           </div>
         </div>
        <div class="main_chat__message-list__message__body">
          <p class="main_chat__message-list__message__body__content">
            ${message.content}
          </p>
        </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main_chat__message-list__message">
         <div class="main_chat__message-list__message__header">
           <div class="main_chat__message-list__message__header__name">
             ${message.user_name}
           </div>
           <div class="main_chat__message-list__message__header__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main_chat__message-list__message__body">
           <p class="main_chat__message-list__message__body__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 $('#main_chat__form__submit-btn').removeAttr('data-disable-with');
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main_chat__message-list').append(html);
    $('form')[0].reset();
    $('.main_chat').animate({ scrollTop: $('.main_chat__message-list')[0].scrollHeight});
  })
    .fail(function() {
      alert('メッセージを送信できません');
    });
    return false;
  })
});
