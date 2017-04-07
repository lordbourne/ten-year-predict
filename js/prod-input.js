$(document).ready(function() {
  // 如果曾经输入过表单，就直接利用本地存储方式填充表单
  $('#data-input input').each(function(index, el) {
    $(this).val(localStorage.getItem($(this)[0].name))
  });

  // 错误检测函数
  // var checkInput = function() {
  //   var b = /^[1-9]*[1-9][0-9]*$/;
  //   $('#data-input input').each(function(index, el) {
  //     $(this).blur(function(event) {
  //       var tmp = $(this).val();
  //       if (index == 0) {
  //         if (!b.test(tmp) || parseInt(tmp) < 1 || parseInt(tmp) > 20) {
  //           $(this).val("").focus();
  //           alert("月实动人均件数必须是正整数且在数值区间内！");
  //           return false;
  //         }
  //       } else if (index == 1) {
  //         if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000) {
  //           $(this).val("").focus();
  //           alert("件均保费必须是正整数且在数值区间内！");
  //           return false;
  //         }
  //       } else if (index == 2) {
  //         if (!b.test(tmp) || parseInt(tmp) != 25) {
  //           $(this).val("").focus();
  //           alert("佣金率必须是正整数且在数值区间内！");
  //           return false;
  //         }
  //       } else if (index == 3) {
  //         if (!b.test(tmp) || parseInt(tmp) != 70) {
  //           $(this).val("").focus();
  //           alert("开单率必须是正整数且在数值区间内！");
  //           return false;
  //         }
  //       } else if (index == 4) {
  //         if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000000) {
  //           $(this).val("").focus();
  //           alert("个人月首佣必须是正整数且在数值区间内！");
  //           return false;
  //         }
  //       }
  //       return true;
  //     });
  //   });
  // }
  function checkInputAgain() {
    // var b = /^[1-9]*[1-9][0-9]*$/;
    // $('#data-input input').each(function(index, el) {
    //   var tmp = $(this).val();
    //   if (index == 0) {
    //     if (!b.test(tmp) || parseInt(tmp) < 1 || parseInt(tmp) > 20) {
    //       $(this).val("").focus();
    //       alert("月实动人均件数必须是正整数且在数值区间内！");
    //       return false;
    //     }
    //   } else if (index == 1) {
    //     if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000) {
    //       $(this).val("").focus();
    //       alert("件均保费必须是正整数且在数值区间内！");
    //       return false;
    //     }
    //   } else if (index == 2) {
    //     if (!b.test(tmp) || parseInt(tmp) != 25) {
    //       $(this).val("").focus();
    //       alert("佣金率必须是正整数且在数值区间内！");
    //       return false;
    //     }
    //   } else if (index == 3) {
    //     if (!b.test(tmp) || parseInt(tmp) != 70) {
    //       $(this).val("").focus();
    //       alert("开单率必须是正整数且在数值区间内！");
    //       return false;
    //     }
    //   } else if (index == 4) {
    //     if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000000) {
    //       $(this).val("").focus();
    //       alert("个人月首佣必须是正整数且在数值区间内！");
    //       return false;
    //     }
    //   }
    //   return true;
    // });
    //
    var b = /^[1-9]*[1-9][0-9]*$/;
    var tmp = "";
    tmp = $('#data-input input').filter(':eq(0)').val();
    if (!b.test(tmp) || parseInt(tmp) < 1 || parseInt(tmp) > 20) {
      alert("月实动人均件数必须是正整数且在数值区间内！");
      $(this).val("").focus();
      return false;
    }
    tmp = $('#data-input input').filter(':eq(1)').val();
    if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000) {
      $(this).val("").focus();
      alert("件均保费必须是正整数且在数值区间内！");
      return false;
    }
    tmp = $('#data-input input').filter(':eq(2)').val();
    if (!b.test(tmp) || parseInt(tmp) != 25) {
      $(this).val("").focus();
      alert("佣金率必须是正整数且在数值区间内！");
      return false;
    }
    tmp = $('#data-input input').filter(':eq(3)').val();
    if (!b.test(tmp) || parseInt(tmp) != 70) {
      $(this).val("").focus();
      alert("开单率必须是正整数且在数值区间内！");
      return false;
    }
    tmp = $('#data-input input').filter(':eq(4)').val();
    if (!b.test(tmp) || parseInt(tmp) < 1000 || parseInt(tmp) > 10000000) {
      $(this).val("").focus();
      alert("个人月首佣必须是正整数且在数值区间内！");
      return false;
    }
    return true;
  }



  // checkInput();
  $('#setdata').click(function(event) {
    event.preventDefault();
    // console.log(checkInputAgain());
    if (checkInputAgain()) {
      $('#data-input input').each(function(index, el) {
        localStorage.setItem($(this)[0].name, $(this)[0].value);
      });
      gotoNextPage(this);
    }

  });
});
