//top
let tabs = $('#js-tab li');
tabs.on('click', function () {
  $(".active").removeClass("active");
  $(this).addClass("active");
  const index = tabs.index(this);
  $("#js-cnt > li").eq(index).addClass("active");
}); //pages

$('#js-reload').on('click', function () {
  location.reload();
});