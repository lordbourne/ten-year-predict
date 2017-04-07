$(document).ready(function() {
  var agntnum = localStorage.agntnum;
  // 没缓存或者换人了都要更新缓存
  // if (typeof localStorage.agntname == "undefined") {
    $.ajax({
      // url: 'http://10.12.1.88/Query/servlet/com.base.JsonDataServlet',
      url: 'http://taikangsc.com:9080/bip/servlet/com.base.JsonDataServlet',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        agntnum: agntnum
      },
      beforeSend:function(XMLHttpRequest){
        $('#page').hide();
        $('body').append('<div class="spinner" id="spinner"></div>'); //在后台返回success之前显示loading图标
      },
      success: function(data) {
        console.log(data);
        $('#spinner').remove();
        $('#page').show();
        $('header h1 span').html((data['nsr']/10000).toFixed(2));
        $spans = $('section span');
        for (key in data) {
          // console.log(data[key]);
          $spans.filter('[data-' + key + ']').html(data[key]);
          localStorage.setItem(key, data[key]);
        }
      }
    });
  // } else {
  //   // 信息先从本地提取,本地有就不用请求了
  //   $('header h1 span').html((localStorage.nsr/10000).toFixed(2));
  //   data = [
  //     'agntnum',// 工号
  //     'agntname',// 姓名
  //     'agtype',// 职级
  //     'dteapp',// 入司时间
  //     'zxzrs',// 直辖组人力
  //     'zxbrs',// 直辖部人力
  //     'sxrs',// 所辖人力
  //     'zxas',// 直辖 AS
  //     'zxss',// 直辖 SS
  //     'zxum',// 直辖 UM
  //     'zxad'// 直辖 UM
  //   ];
  //   $spans = $('section span');
  //   for (index in data) {
  //     // console.log(data[key]);
  //     key = data[index];
  //     $spans.filter('[data-' + key + ']').html(localStorage[key]);
  //   }
  // }

  $('#followme').click(function(event) {
    event.preventDefault();
    gotoNextPage(this);
  });
});

