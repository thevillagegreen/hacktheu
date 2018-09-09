var iframe = document.getElementById('KindleReaderIFrame');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var content = innerDoc.getElementById('kindleReader_content')

content_iframeINPUT = innerDoc.getElementById('column_0_frame_1');
color(content_iframeINPUT);
content_iframeINPUT = innerDoc.getElementById('column_0_frame_0');
color(content_iframeINPUT);


function color(content_iframe) {
  var contentDoc = content_iframe.contentDocument || content_iframe.contentWindow.document;

  var content_divs = contentDoc.querySelectorAll('[id^="a:"]');
  //console.log(content_divs.children)

  content_divs.forEach(function(elem) {
    ([].slice.call(elem.children)).forEach(function(e){
      e.style.color = 'black';
    })
    })
  }
