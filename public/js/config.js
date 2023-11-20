$(document).ready(function () {
  console.log('ready!');

  $('#btnSave').on('click', function (e) {
    e.preventDefault();
    const formData = $('#form').serializeArray();

    $.ajax({
      type: 'POST',
      url: '/config',
      data: formData,
      success: function () {
        alert('Save successfully');
      },
      fail: function (jqXHR, textStatus, errorThrown) {
        console.error("Error", jqXHR);
      },
    });
  });
});
