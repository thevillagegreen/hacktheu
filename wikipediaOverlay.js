
// colors to display
var color1_;
var color2_;

chrome.storage.sync.get('color1', function(data) {
  color1_ = data.color1;
  chrome.storage.sync.get('color2', function(result) {
      color2_ = result.color2;
      main();
    });
  });


function generatePartitions(parentDiv, length) {
  Divs = [];
  currentDiv = [];
  Divs.push(currentDiv);
  for (var i = 0; i < length; i++) {
    if (parentDiv[i].nodeName === "P") {
      currentDiv.push(parentDiv[i]);
    } else {
      if (currentDiv.length > 0) {
        currentDiv = [];
        Divs.push(currentDiv);
      }
    }
  }
  return Divs;
}
//parent = document.getElementById("mw-content-text").firstChild;
/*parent.prepend(document.createElement("div"));
newDiv = parent.firstChild;
newDiv.appendChild(document.createElement("h1"));
console.log("test");
t = 0;
total = 0;
divs.forEach(function(element) {
  console.log("This "+t+" has: " + element.length);
  t++;
  total = total+element.length;
});
console.log(total);*/

function main(){
  divs = generatePartitions(document.getElementById("mw-content-text").firstChild.childNodes, document.getElementById("mw-content-text").firstChild.childNodes.length);

  var cols = [].slice.call(document.getElementsByClassName("column"));

  if(cols.length > 0) {
    cols.forEach(function(elem){
      elem.style.opacity = 0.7;
    });
    exit();
  }


  // set number of columns you want to be displayed
  var colNum = 18;

  nodes = [];
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].length !== 0) {
      var node = divs[i][0].parentNode.insertBefore(document.createElement('div'), divs[i][0]);

      var overlaysDiv = document.createElement('div');
      overlaysDiv.classList.add('overlays');
      node.prepend(overlaysDiv);
      height = 0;
      divs[i].forEach(function(element) {
        height = height + element.clientHeight
      });

      console.log(height)

      //var paragraphHeight = node.clientHeight;

      nodeChildren = node.children

      console.log(nodeChildren);

      // for (var i = 0; i < nodeChildren.length; i++) {
      //     console.log(nodeChildren.item(i)); //second console output
      // }


      // add properties to div


      overlaysDiv.style.position = 'absolute';
      overlaysDiv.style.display = 'grid';
      overlaysDiv.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`
      overlaysDiv.style.gridTemplateRows = '1fr';
      overlaysDiv.style.width = '100vw';
      overlaysDiv.style.height = (height+20) + "px";


      // for each colNum, create col
      for (var j = 0; j < colNum; j++) {
        // create a column item
        var colDiv = document.createElement("div");
        colDiv.classList.add("column");
        // alternate all even columns with color
        if (j % 2 === 0) {
          if (j % 4 === 0) {
            colDiv.style.backgroundColor = color1_;
            colDiv.style.opacity = 0.7;
          } else {
            colDiv.style.backgroundColor = color2_;
            colDiv.style.opacity = 0.7;
          }
        }
        // assign grid index to div
        colDiv.style.gridColumn = `${j + 1};`;
        colDiv.style.gridRow = "1";
        // append to display div
        overlaysDiv.appendChild(colDiv);
      }




      divs[i].forEach(function(element) {
        var e = element.parentNode.removeChild(element);
        node.appendChild(e);
      });
      nodes.push(node);
    };
  };

  nodes.forEach(function(element){
    console.log(element)
  });

}
// when user resizes screen, update paragraph height to grid
// window.onresize = function() {
//   for (var i = 0; i < paragraphs.length; i++) {
//     // the overlay is the first child of paragraph div
//     var overlaysDiv = paragraphs[i].children[0];
//     // get height of the paragraph
//     paragraphHeight = paragraphs[i].clientHeight;
//     // set the div to the exact height of the paragraph
//     overlaysDiv.style.height = paragraphHeight + "px";
//   }
//   location.reload();
// };
// for(var i = 0; i < divs.length-1; i ++) {
//   console.log(i);
//   var inserted = divs[i][0].insertBefore(document.createElement("div"), null);
//   for(var j =0; j < divs[i].length; j++) {
//     inserted.appendChild(divs[i][j]);
//   }
// };
//
// divs.forEach(function(element){
//   console.log("test");
//   element.forEach(function(element){
//     element.style.color="#ff00000";
//   });
// });
/*for (var i = 0; i< divs[3].length; i++) {

  if( i == 0) {
    console.log(i);
  }
  else{
    console.log(i);
    console.log(divs[3][i].nodeName);
    newDiv.appendChild(divs[3][i], null);
  }
}

newDiv.childNodes.forEach(function(element) {
  element.style.color="#ffff00";
})*/
