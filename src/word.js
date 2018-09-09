colNum = 4;


splitLines();
showLines();


function showLines() {
  var lines = getLines();
  // console.log(
  //   lines.map(function(line) {
  //     return line.map(function(span) {
  //       return span.innerText;
  //     }).join(' ')
  //   }));
}

function splitLines() {
  var p = document.getElementsByTagName('p')[0];
  p.innerHTML = p.innerText.split(/\s/).map(function(word, index) {
    return '<span>' + word + '</span>'
  }).join(' ');
}



function getLines() {
  var lines = [];
  var line;
  var p = document.getElementsByTagName('p')[0];
  var words = p.getElementsByTagName('span');
  var lastTop;

  for (var i = 0; i < words.length; i++) {
    
    var word = words[i];
    if (word.offsetTop != lastTop) {
      
      lastTop = word.offsetTop;
      line = [];
      lines.push(line);
      
    }
    line.push(word);
    
  }
  
  var cols = 6;
  lines.forEach( (line, lineIndex) => {
    var lineLength = line.length
    var increment = Math.floor(lineLength/cols);
    var arr = Array.apply(null, {length: lineLength}).map(Number.call, Number)
    var chunks = chunk(arr, increment)
    line.forEach( (word, wordIndex) => {
      //var color = getColor(wordIndex, lineIndex, 5);
      returnColor = 'black'
      chunks.forEach((chunk,index) => {
        if(chunk.indexOf(wordIndex) > -1) {
          if(index%2 === 0) {
            if(index%4 === 0) {
              returnColor = 'green';
            } else {
              returnColor = 'red';
            } 
          } else {
            returnColor = 'black';
          }
        }
        
      })
      word.style.color = returnColor;
    }) 
  });
  
  return lines;
}

// function getColor(wordIndex, lineLength, cols) {
//   var increment = Math.floor(lineLength/cols);
//   var N = lineLength; 
//   arr = Array.apply(null, {length: N}).map(Number.call, Number)
//   chunks = chunk(arr, increment) // create chunks from array sized by increment

//   returnColor = 'black'
//   chunks.forEach((chunk,index) => {
//     if(chunk.indexOf(wordIndex) > -1) {
//       if(index%2 === 0) {
//         if(index%4 === 0) {
//           returnColor = 'green';
//         } else {
//           returnColor = 'red';
//         } 
//       } else {
//         returnColor = 'black';
//       }
//     }
     
//   })
//   return returnColor
  
// }


window.onresize = function() {
  splitLines();
  showLines();
};


function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}
