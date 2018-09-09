// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);

// set number of columns you want to be displayed
var colNum = 12;

var pTags = document.getElementsByTagName('p');
for (var p = 0; p < pTags.length; p++) {
  pTags[p].style.zIndex = 100000;
  pTags[p].style.position = 'relative';
}

// colors to display
color1_ = '#cc0000';
color2_ = '#007800';
color3_ = '#ff0000';
color4_ = '#75f0f0';


var overlaysDiv = document.getElementById('overlays')
var p1 = document.getElementById('alternating')
var previewDiv = document.getElementById('preview')

  paragraphHeight = document.getElementById('overlayParagraph').clientHeight;
  // set the div to the exact height of the paragraph
  overlaysDiv.style.position = 'absolute';
  overlaysDiv.style.display = 'grid';
  overlaysDiv.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`
  overlaysDiv.style.gridTemplateRows = '1fr';
  overlaysDiv.style.width = '40vw';


    overlaysDiv.style.height = paragraphHeight + "px";
    // for each colNum, create col
    for (var j = 0; j < colNum; j++) {
      // create a column item
      var colDiv = document.createElement("div");
      colDiv.classList.add("column");
      // alternate all even columns with color
      if (j % 2 === 0) {
        if (j % 4 === 0) {
          colDiv.style.backgroundColor = color1_;
          colDiv.style.opacity = 1;
        } else {
          colDiv.style.backgroundColor = color2_;
          colDiv.style.opacity = 1;
        }
      }
      // assign grid index to div
      colDiv.style.gridColumn = `${j + 1};`;
      colDiv.style.gridRow = "1";
      // append to display div
      overlaysDiv.appendChild(colDiv);
    }



//console.log(p1)
  element = p1;
  wordSplit = element.innerText.split(/\s/);
  chunks = chunk(wordSplit,3);
  var newP = document.createElement('p');
  chunks.forEach((chunk, index) => {
    var color = 'black';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = color4_
      } else {
        color = color3_
      }
    }
    pSection = chunk.join(" ") + " ";
    newSpan = document.createElement("span")
    newSpan.innerText = pSection
    newSpan.style.color = color;
    newP.appendChild(newSpan);
    //console.log(newSpan);
  });

  element.parentNode.insertBefore(newP, element);
  element.parentNode.removeChild(element);






function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}



// listening for events to change preview colors
document.getElementById('over-leftBtn').addEventListener('click', function(event) {
  var cv1 = document.getElementById('over-color-left').value;
  var p = document.getElementById("over-output-left");
  over_color1_ = cv1;
  chrome.storage.sync.set({over_color1: over_color1_}, function() {
          //console.log('color is ' + item);
        });
  p.textContent = cv1;
  for (var index = 0; index < overlaysDiv.children.length; index++) {
    var color = 'translucent';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = over_color1_
      } else {
        color = overlaysDiv.children[index].style.backgroundColor
      }
    }
    overlaysDiv.children[index].style.backgroundColor = color
  }
})

document.getElementById('over-rightBtn').addEventListener('click', function(event) {
  var cv1 = document.getElementById('over-color-right').value;
  var p = document.getElementById("over-output-right");
  over_color2_ = cv1;
  chrome.storage.sync.set({over_color2: over_color2_}, function() {
          //console.log('color is ' + item);
        });
  for (var index = 0; index < overlaysDiv.children.length; index++) {
    var color = 'translucent';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = overlaysDiv.children[index].style.backgroundColor;
      } else {
        color = over_color2_
      }
    }
    overlaysDiv.children[index].style.backgroundColor = color
  }

})

document.getElementById('alt-leftBtn').addEventListener('click', function(event) {
  var cv1 = document.getElementById('alt-color-left').value;
  var p = document.getElementById("alt-output-left");

  alt_color1_ = cv1;
  chrome.storage.sync.set({alt_color1: alt_color1_}, function() {
          //console.log('color is ' + item);
        });
  color2_ = alt_color1_
  for( var i = 0; i < newP.children.length; i++) {
    color = 'black'
    if(i%2 === 0) {
      if(i%4 === 0) {
        color = alt_color1_
      } else {
        color = newP.children[i].style.color;
      }
    }
    newP.children[i].style.color = color;
  }




});


document.getElementById('alt-rightBtn').addEventListener('click', function(event) {
  var cv1 = document.getElementById('alt-color-right').value;
  alt_color2_ = cv1;
  chrome.storage.sync.set({alt_color2: alt_color2_}, function() {
          //console.log('color is ' + item);
        });
  for( var i = 0; i < newP.children.length; i++) {
    color = 'black'
    if(i%2 === 0) {
      if(i%4 === 0) {
        color = newP.children[i].style.color;
      } else {
        color = alt_color2_
      }
    }
    newP.children[i].style.color = color;
  }


})
