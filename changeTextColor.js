var p1 = [].slice.call(document.getElementsByTagName('p'));
//console.log(p1)

color1 = 'red'
color2 = 'green'

p1.forEach(function(element) {
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
});



function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}
