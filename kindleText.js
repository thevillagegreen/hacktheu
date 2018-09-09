var iframe = document.getElementById('KindleReaderIFrame');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var content = innerDoc.getElementById('kindleReader_content')

content_iframeINPUT = innerDoc.getElementById('column_0_frame_1');

color(content_iframeINPUT);
content_iframeINPUT = innerDoc.getElementById('column_0_frame_0');
color(content_iframeINPUT);


function color(content_iframe){
  var contentDoc = content_iframe.contentDocument || content_iframe.contentWindow.document;

  // set number of columns you want to be displayed
  var colNum = 24;

  // colors to display
  color1 = 'red';
  color2 = 'blue';

  var content_divs = contentDoc.querySelectorAll('[id^="a:"]');
  //console.log(content_divs.children)

  content_divs.forEach(function(elem) {
    for(var i = 0; i < elem.children.length; i++) {
      //console.log(content_divs.children[i])
      spanArr = []
      if(elem.children[i].tagName === 'DIV') {
        var divWithSpans = elem .children[i]
        for(var j = 0; j < divWithSpans.children.length; j++ ) {
          spanArr.push(divWithSpans.children[j])
        }
        var spanChunks = chunk(spanArr, 3);
        spanChunks.forEach(function(chunk, index){
          var color = 'black';
          if(index%2 === 0) {
            if(index%4 === 0) {
              color = color2
            } else {
              color = color1
            }
          }
          for(var k = 0; k < chunk.length; k++) {
            chunk[k].style.color = color;
          }

        })
      }
    }
  })

}




function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}
