$(function() {
  setTimeout(function() {
    $(".count_down").text("44Oe44K444Kr44OrTGlTQeODqeOCpOODluODnuODhw==")
  }, 1000);
  setTimeout(function() {
    setInterval(function() {
      let i = time();
      let h = "" + i.date + i.hour + i.minute + i.second;
      let g = h.indexOf("39");
      if (~g) {
        $(".count_down").addClass("j")
      } else {
        $(".count_down").removeClass("j")
      }
      $(".count_down").text(h);
      $('title').text(h)
    }, 1000)
  }, 1000)
});

function time() {
  let startDateTime = new Date();
  const b = new Date("July 3,2017 15:30:00");
  const c = b - startDateTime;
  const a = 24 * 60 * 60 * 1000;
  return {
    date: Math.floor(c / a),
    hour: Math.floor((c % a) / (60 * 60 * 1000)),
    minute: Math.floor((c % a) / (60 * 1000)) % 60,
    second: Math.floor((c % a) / 1000) % 60 % 60
  }
};
