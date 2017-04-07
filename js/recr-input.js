$(document).ready(function() {
  // 如果曾经输入过表单，就直接利用本地存储方式填充表单
  $('#data-input input').each(function(index, el) {
    $(this).val(localStorage.getItem($(this)[0].name));
  });
  // 错误检测，失焦检测
  // var test1 = /^\s*0*[1-9][0-9]?$/,// 直接增员检测
  //     test2 = //,// 13 个月留存率检测
  //     test3 = //,// 25 个月留存率检测
  //     test4 = //;// 10年后团队组均人力检测

  var b = /^[1-9]*[1-9][0-9]*$/;
  $('#data-input input').each(function(index, el) {
    $(this).blur(function(event) {
      var tmp = $(this).val();
      if (index == 0) {
        if (!b.test(tmp) || parseInt(tmp) < 1 || parseInt(tmp) > 50) {
          $(this).val("").focus();
          alert("直接增员必须是正整数且在数值区间内！");
          return false;
        }
      } else if (index == 1) {
        if (!b.test(tmp) || parseInt(tmp) < 0 || parseInt(tmp) > 100) {
          $(this).val("").focus();
          alert("13 个月留存率必须是正整数且在数值区间内！");
          return false;
        }
      } else if (index == 2) {
        if (!b.test(tmp) || parseInt(tmp) < 0 || parseInt(tmp) > 100) {
          $(this).val("").focus();
          alert("25 个月留存率必须是正整数且在数值区间内！");
          return false;
        }
      } else if (index == 3) {
        if (!b.test(tmp) || parseInt(tmp) < 1 || parseInt(tmp) > 50) {
          $(this).val("").focus();
          alert("10年后团队组均人力必须是正整数且在数值区间内！");
          return false;
        }
      }
    });
  });

  $('#setdata').click(function(event) {
    event.preventDefault();
    // function checkdata() {
    //   var b = /^[1-9]*[1-9][0-9]*$/;
    //   if (!b.test(document.form1.rjjs.value) || parseInt(document.form1.rjjs.value) < 1 || parseInt(document.form1.rjjs.value) > 50) {
    //     alert("实动人均件数必须是正整数且在数值区间内！");
    //     return false;
    //   }
    //   if (!b.test(document.form1.jjbf.value) || parseInt(document.form1.jjbf.value) < 1000 || parseInt(document.form1.jjbf.value) > 100000) {
    //     alert("件均保费数量必须是正整数且在数值区间内！");
    //     return false;
    //   }
    //   if (!b.test(document.form1.yjl.value) || parseInt(document.form1.yjl.value) < 1 || parseInt(document.form1.yjl.value) > 100) {
    //     alert("佣金率必须是正整数且在数值区间内！");
    //     return false;
    //   }
    //   if (!b.test(document.form1.kdl.value) || parseInt(document.form1.kdl.value) < 1 || parseInt(document.form1.kdl.value) > 100) {
    //     alert("开单率必须是正整数且在数值区间内！");
    //     return false;
    //   }
    //   if (!b.test(document.form1.sy.value) || parseInt(document.form1.sy.value) < 1 || parseInt(document.form1.sy.value) > 100000000) {
    //     alert("个人月度首佣必须是正整数且在数值区间内！");
    //     return false;
    //   }
    //   // document.form1.v1.value = '1';
    //   // document.form1.submit();
    // }
    $('#data-input input').each(function(index, el) {
      localStorage.setItem($(this)[0].name, $(this)[0].value);
    });;
    gotoNextPage(this);
  });
});
