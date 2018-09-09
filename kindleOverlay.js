

// colors to display
color1_ = 'red';
color2_ = 'blue';

chrome.storage.sync.get('over_color1', function(data) {
  color1_ = data.over_color1;
  chrome.storage.sync.get('over_color2', function(result) {
      color2_ = result.over_color2;
      main();
    });
  });


function main() {
  var iframe = document.getElementById('KindleReaderIFrame');
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  var content = innerDoc.getElementById('kindleReader_content')

  var container = content.children.item(0)
  var height = container.clientHeight
  var overlaysDiv = innerDoc.createElement('div');

  // set number of columns you want to be displayed
  var colNum = 24;

  overlaysDiv.style.position = 'absolute';
  overlaysDiv.style.display = 'grid';
  overlaysDiv.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`
  overlaysDiv.style.gridTemplateRows = '1fr';
  overlaysDiv.style.width = '80vw';
  overlaysDiv.style.zIndex = 100;
  overlaysDiv.style.height = (height+30) + "px";

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
  container.style.position = 'relative'
  container.appendChild(overlaysDiv)

  console.log(container)

}
