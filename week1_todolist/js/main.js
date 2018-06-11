$(document).ready(function() {
  $(".menu-item").on("click", function(e) {
    if (!$(e.currentTarget).hasClass("active")) {
      $(".menu-item.active").removeClass("active");
      $(e.currentTarget).addClass("active");
    }
  });
  $(".star").on("click", function(e) {
    if ($(e.currentTarget).hasClass("far")) {
      $(e.currentTarget).removeClass("far");
      $(e.currentTarget).addClass("fas");
      $(e.currentTarget).addClass("active");
      $(e.currentTarget).parents('.list-item').addClass('important');
    } else {
      $(e.currentTarget).removeClass("fas");
      $(e.currentTarget).removeClass("active");
      $(e.currentTarget).addClass("far");
      $(e.currentTarget).parents('.list-item').removeClass('important');
    }
  });
  $('#file-upload-button').on('click', function(e){
    $('#file').click();
  });
  $('#file').on('change',function(e){
    if(e.currentTarget.files != null && 
      e.currentTarget.files.length > 0){
      $('#file-name')[0].innerHTML=e.currentTarget.files[0].name+'<br/>';
      $('#file-info').removeClass('d-none');
    }
  })
  $("[type='checkbox']").on('change', function(e){
    let targerText = $(this).parent().next('.font-checkbox');
    if($(this).is(':checked')){
     $(targerText).addClass('font-complate');
    }
    else
      {
         $(targerText).removeClass('font-complate');
      }
  });
});
