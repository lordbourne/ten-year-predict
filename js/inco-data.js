$(document).ready(function() {
  var agntnum = localStorage.getItem('agntnum');
  var $spans = $('main section span');
  $.ajax({
    url: 'http://10.12.1.88/Query/servlet/com.base.JsonDataServlet',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      agntnum: agntnum
    },
    beforeSend:function(XMLHttpRequest){
      $('#container').hide();
      $('body').append('<div class="spinner" id="spinner"></div>'); //在后台返回success之前显示loading图标
    },
    success: function(data) {
      console.log(data);
      $('#spinner').remove();
      $('#container').show();
      $('header h1 span').html((data['nsr']/10000).toFixed(2));
      for (key in data) {
        // console.log(data[key]);
        $spans.filter('[data-' + key + ']').html(data[key]);
        localStorage.setItem(key, data[key]);
      }
    }
  });
});

