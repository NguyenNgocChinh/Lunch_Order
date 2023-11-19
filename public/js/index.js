$(document).ready(function () {
  $('.ant-tabs-tab').on('click', function (event) {
    event.preventDefault();

    var o = $($(this).attr('href')).offset();
    var sT = o.top - 15 - $('.nav').outerHeight(true);

    window.scrollTo({ top: sT, behavior: 'smooth' });
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function chooseFood(link) {
  window.open(link, '_blank');
}
