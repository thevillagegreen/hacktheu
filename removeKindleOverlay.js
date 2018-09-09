var iframe = document.getElementById('KindleReaderIFrame');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var cols = [].slice.call(innerDoc.getElementsByClassName("column"));

cols.forEach(function(elem) {
  elem.parentNode.removeChild(elem);
});
