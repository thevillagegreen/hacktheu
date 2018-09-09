// set number of columns you want to be displayed
var colNum = 18;

// colors to display
color1 = 'red';
color2 = 'blue';


function generateBars(paragraph) {
 if(paragraph.clientHeight < 40) {
   return;
 }
  parentDiv = paragraph.parentNode.insertBefore(document.createElement("div"), paragraph);
  paragraph.parentNode.removeChild(paragraph);
  parentDiv.appendChild(paragraph);
  overlaysDiv = document.createElement("div");
  parentDiv.prepend(overlaysDiv);
  overlaysDiv.classList.add('overlays');
  overlaysDiv.style.position = 'absolute';
  overlaysDiv.style.display = 'grid';
  overlaysDiv.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`
  overlaysDiv.style.gridTemplateRows = '1fr';
  overlaysDiv.style.width = paragraph.clientWidth + "px";
  console.log(paragraph.clientWidth );
  overlaysDiv.style.height = (paragraph.clientHeight + 8) + "px";


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


var paragraphs = [].slice.call(document.getElementsByTagName('P'));

paragraphs.forEach(function(elem) {
  generateBars(elem);
});