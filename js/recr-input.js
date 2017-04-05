$(document).ready(function() {
  // 如果曾经输入过表单，就直接利用本地存储方式填充表单
  $('form input').each(function(index, el) {
    $(this).val(localStorage.getItem($(this)[0].name));
  });
  $('#setdata').click(function(event) {
    event.preventDefault();
    $('form input').each(function(index, el) {
      localStorage.setItem($(this)[0].name, $(this)[0].value);
    });;
    window.location.href = $(this).attr('href');
  });
});
