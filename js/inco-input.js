$(document).ready(function() {
  // Focus state for append/prepend inputs
  $('.input-group')
  .on('focus', '.form-control', function () {
    $(this).closest('.input-group, .form-group').addClass('focus');
  })
  .on('blur', '.form-control', function () {
    $(this).closest('.input-group, .form-group').removeClass('focus');
  });

  // 如果曾经输入过表单，就直接利用本地存储方式填充表单
  $('#agntnum-input').val(function() {
    return localStorage.getItem($(this).attr('name'));
  });
  $('#setdata').click(function(event) {
    var agntnum = $('#agntnum-input').val();
    var reg = /^[0-9]{8}$/;
    if (!reg.test(agntnum)) {// 输入不合法
      alert('请输入正确的数值：8 位数字');// todo: 这里要加个特效
    } else {// 输入合法
      // todo: 数据库查不到记录的操作
      localStorage.setItem('agntnum', agntnum);
      gotoNextPage(this);
    }
  });
});

