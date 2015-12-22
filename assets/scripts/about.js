function timeNow() {
  var now = new Date();
  var timeNow = (now.getHours() + ':' + (('0' + now.getMinutes()).slice(-2)).toString());

  document.getElementById('time').innerHTML = timeNow;

}

$(document).ready(function() {
  timeNow();
  setInterval('timeNow()', 1000);

  $('#btn').click(function() {
    $('#gif').toggleClass("hidden");
  })
})

