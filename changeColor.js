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
divs = generatePartitions(document.getElementById("mw-content-text").firstChild.childNodes, document.getElementById("mw-content-text").firstChild.childNodes.length);
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

nodes = [];
for (var i = 0; i < divs.length; i++) {
  if (divs[i].length !== 0) {
    var node = divs[i][0].parentNode.insertBefore(document.createElement('div'), divs[i][0]);

    var overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    node.prepend(overlayDiv);

    divs[i].forEach(function(element) {
      var e = element.parentNode.removeChild(element);
      node.appendChild(e);
    });
    nodes.push(node);
  };
};

nodes.forEach(function(element){
  element.style.color = "#ff00ff";
});
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
