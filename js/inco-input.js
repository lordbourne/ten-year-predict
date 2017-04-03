$(document).ready(function() {
  $('#setdata').click(function(event) {
    event.preventDefault();
    var $agntnum = $('#agntnum-input');
    localStorage.setItem('agntnum', $agntnum.val());
    window.location.href="inco-data.html";
  });
});

