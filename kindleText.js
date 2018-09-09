var iframe = document.getElementById('KindleReaderIFrame');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var content = innerDoc.getElementById('kindleReader_content')

content_iframe = innerDoc.getElementById('column_0_frame_1');
var contentDoc = content_iframe.contentDocument || content_iframe.contentWindow.document;

// set number of columns you want to be displayed
var colNum = 24;

// colors to display
color1 = 'red';
color2 = 'blue';

var content_divs = contentDoc.getElementById('a:D6');
//console.log(content_divs.children)

for(var i = 0; i < content_divs.children.length; i++) {
  //console.log(content_divs.children[i])
  spanArr = []
  if(content_divs.children[i].tagName === 'DIV') {
    var divWithSpans = content_divs.children[i]
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





function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}