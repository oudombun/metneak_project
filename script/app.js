
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("textarea").emojioneArea({
    pickerPosition: "right"
  });
   setTimeout(() => {
    $("#preloader").remove();
   }, 500);

})
