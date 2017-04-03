$(document).ready(function() {
  $('#setdata').click(function(event) {
    event.preventDefault();
    $('form input').each(function(index, el) {
      localStorage.setItem($(this)[0].name, $(this)[0].value);
    });;
    window.location.href = $(this).attr('href');
  });
});
