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

// colors to display
color1 = 'red';
color2 = 'blue';

var overlaysDiv = document.getElementById('overlays')
var p1 = document.getElementById('alternating')

function overlays() {
  paragraphHeight = document.getElementById('overlayParagraph').clientHeight;
  // set the div to the exact height of the paragraph
  overlaysDiv.style.position = 'absolute';
  overlaysDiv.style.display = 'grid';
  overlaysDiv.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`
  overlaysDiv.style.gridTemplateRows = '1fr';
  overlaysDiv.style.width = '50vw';
    
    
    overlaysDiv.style.height = paragraphHeight + "px";
    // for each colNum, create col
    for (var j = 0; j < colNum; j++) {
      // create a column item
      var colDiv = document.createElement("div");
      colDiv.classList.add("column");
      // alternate all even columns with color
      if (j % 2 === 0) {
        if (j % 4 === 0) {
          colDiv.style.backgroundColor = color1;
          colDiv.style.opacity = 0.7;
        } else {
          colDiv.style.backgroundColor = color2;
          colDiv.style.opacity = 0.7;
        }
      }
      // assign grid index to div
      colDiv.style.gridColumn = `${j + 1};`;
      colDiv.style.gridRow = "1";
      // append to display div
      overlaysDiv.appendChild(colDiv);
    }
  
}


//console.log(p1)

function alternating() {
  element = p1;
  wordSplit = element.innerText.split(/\s/);
  chunks = chunk(wordSplit,3);
  var newP = document.createElement('p');
  //newP.style.backgroundColor = "#ff00ff";
  chunks.forEach((chunk, index) => {
    var color = 'black';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = color2
      } else {
        color = color1
      }
    }
    pSection = chunk.join(" ") + " ";
    newSpan = document.createElement("span")
    newSpan.innerText = pSection
    newSpan.style.color = color;
    newSpan.style.fontSize = '1em';
    newP.appendChild(newSpan);
    //console.log(newSpan);
  });

  element.parentNode.insertBefore(newP, element);
  element.parentNode.removeChild(element);

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

overlays();
alternating();


// listening for events to change preview colors 
function processLeftColor(c1) {
  var cv1 = document.getElementById(c1).value;
  var p = document.getElementById("output_left");
  color1 = cv1;
  p.textContent = cv1;
  for (var index = 0; index < overlaysDiv.children.length; index++) {
    var color = 'translucent';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = color2
      } else {
        color = color1
      }
    }
    overlaysDiv.children[index].style.backgroundColor = color
  }
}

function processRightColor(c1) {
  var cv1 = document.getElementById(c1).value;
  var p = document.getElementById("output_right");
  color2 = cv1;
  p.textContent = cv1;
  for (var index = 0; index < overlaysDiv.children.length; index++) {
    var color = 'translucent';
    if(index%2 === 0) {
      if(index%4 === 0) {
        color = color2
      } else {
        color = color1
      }
    }
    overlaysDiv.children[index].style.backgroundColor = color
  }

}


