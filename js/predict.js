$(document).ready(function() {
  $('form button').click(function(event) {
    var formValues = $('#form input').serialize();
    $.ajax({
      url: 'http://10.12.1.88/Query/zzfzb/sncomp/step3.jsp',
      dataType: 'jsonp',
      data: {

      },
      timeout: 15000,
      success: function(data) {
        console.log(data);
      },
      error: function() {

      }
    });
  });

});
