$(document).ready(function() {
  // 如果曾经输入过表单，就直接利用本地存储方式填充表单
  $('#agntnum-input').val(function() {
    return localStorage.getItem($(this).attr('name'));
  });
  $('#setdata').click(function(event) {
    var $agntnum = $('#agntnum-input');
    localStorage.setItem('agntnum', $agntnum.val());
    window.location.href="inco-data.html";
  });
});

