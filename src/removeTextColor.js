var coloredSpans = [].slice.call(document.getElementsByTagName("span"));

coloredSpans.forEach(function(elem) {
  elem.style.color = 'black';
});

var paras = [].slice.call(document.getElementsByClassName("colorChangeP"));

paras.forEach(function(elem) {
  elem.style.backgroundColor = 'transparent';
});
