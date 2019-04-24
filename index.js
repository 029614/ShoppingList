//Declarations
let globalTarget = null;

//Add list entry function
$('#js-shopping-list-form button').click(function (ev){
  console.log('add function has run');
  let span = $('#js-shopping-list-form input').val();
  let newItem = '<li><span class="shopping-item">' + span + '</span><div class="shopping-item-controls"><button class ="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
  console.log(span);
  ev.preventDefault();
  $("ul").append(newItem);
  console.log("append has run");
});

//delete button function
$(document).on('click', '.shopping-item-delete', function(ev){
  globalTarget = $(ev.target);
  globalTarget.closest('li').remove();
});

//check button function
$(document).on('click', '.shopping-item-toggle', function (ev){
  let thisParent = $(ev.target).closest('li');
  let thisSpan = thisParent.children('span');
  thisSpan.toggleClass('shopping-item__checked');
});
