
$(document).ready(function() {

  var agntnum = localStorage.agntnum;
    $.ajax({
      // url: 'http://10.12.1.88/Query/servlet/com.base.JsonDataServlet',
      url: 'http://taikangsc.com:9080/bip/servlet/com.base.JsonDataServlet',
      // url: './js/test.json',// 测试，直接在本地请求
      type: 'GET',
      dataType: 'jsonp',
      // dataType: 'json',
      data: {
        agntnum: agntnum
      },
      beforeSend: function(XMLHttpRequest){
        $('#page').hide();
        // $('body').append('<div class="spinner" id="spinner"></div>'); //在后台返回success之前显示loading图标
        $('#spinner').show();
      },
      success: function(data) {
        console.log(data);
        // 未请求到数据
        if (!data) {
          alert('未请求到数据');
          window.location.href = "inco-input.html";
        }
        // 获取模板并加载数据
        $.ajax({
          url: 'tpl/tpl-inco-data.html',
          type: 'GET',
          dataType: 'html',
          success: function (tpl) {
            // // 利用 data 属性填充数据
            //   $('header h1 span').html((data['nsr']/10000).toFixed(2));
            //   $spans = $('section span');
            //   for (key in data) {
            //     // console.log(data[key]);
            //     $spans.filter('[data-' + key + ']').html(data[key]);
            //     localStorage.setItem(key, data[key]);
            //   }
            // 利用正则替换填充数据
            data.nsr = (data.nsr / 10000).toFixed(2);
            var html = fillData(tpl, data);
            $('#page').html(html);
          }
        });
        $('#spinner').hide();
        $('#page').slideDown();
        // 存储数据
        for (key in data) {
          localStorage.setItem(key, data[key]);
        }
      },
      error: function (data) {
        alert('error');
      }
    });
  $('#followme').click(function(event) {
    event.preventDefault();
    gotoNextPage(this);
  });
});


