$(document).ready(function() {
  var agntnum = localStorage.agntnum;
  $.ajax({
    // url: 'http://10.12.1.88/Query/servlet/com.base.JsonDataServlet',
    // url: 'http://taikangsc.com:9080/bip/servlet/com.base.JsonDataServlet',
    url: '../js/test.json',// 测试，直接在本地请求
    type: 'GET',
    // dataType: 'jsonp',
    dataType: 'json',
    // data: {
    //   agntnum: agntnum
    // },
    beforeSend:function(XMLHttpRequest){
      $('#page').hide();
      $('body').append('<div class="spinner" id="spinner"></div>'); //在后台返回success之前显示loading图标
    },
    success: function(data) {
      // console.log(data);
      $('#spinner').remove();
      $('#page').show();
      // 正则替换
      data.nsr = data.nsr / 10000;
      var str = $('#page').html();
      var key = "";
      var newstr = str.replace(/\{\{([^{}]+)\}\}/g, function () {
        return data[arguments[1]];
      });
      console.log(newstr);
      $('#page').html(newstr);
    }
  });

  $('#followme').click(function(event) {
    event.preventDefault();
    gotoNextPage(this);
  });
});

