// get all paragraph divs from
var paragraphs = document.getElementsByClassName("paragraph");

// set number of columns you want to be displayed
var colNum = 12;

// for each paragraph
for (var i = 0; i < paragraphs.length; i++) {
  // the overlay is the first child of paragraph div
  var overlaysDiv = paragraphs[i].children[0];
  // get height of the paragraph
  paragraphHeight = paragraphs[i].clientHeight;
  // set the div to the exact height of the paragraph
  overlaysDiv.style.height = paragraphHeight + "px";
  // for each colNum, create col
  for (var j = 0; j < colNum; j++) {
    // create a column item
    var colDiv = document.createElement("div");
    colDiv.classList.add("column");
    // alternate all even columns with color
    if (j % 2 === 0) {
      if (j % 4 === 0) {
        colDiv.style.backgroundColor = "red";
        colDiv.style.opacity = 0.7;
      } else {
        colDiv.style.backgroundColor = "green";
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

// when user resizes screen, update paragraph height to grid
window.onresize = function() {
  for (var i = 0; i < paragraphs.length; i++) {
    // the overlay is the first child of paragraph div
    var overlaysDiv = paragraphs[i].children[0];
    // get height of the paragraph
    paragraphHeight = paragraphs[i].clientHeight;
    // set the div to the exact height of the paragraph
    overlaysDiv.style.height = paragraphHeight + "px";
  }
  location.reload();
};