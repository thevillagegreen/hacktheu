var div = document.getElementsByClassName('paragraph')[0];
var p1 = document.getElementsByTagName('p')[0];
//console.log(p1)

color1 = 'red'
color2 = 'green'

p1Split = p1.innerText.split(/\s/);

p1Chunks = chunk(p1Split, 3);
console.log(p1Chunks);


var newP = document.createElement('p');

p1Chunks.forEach((chunk, index) => {
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
  newSpan.style.fontSize = '2em';
  newP.appendChild(newSpan);
  //console.log(newSpan);
})

while (div.firstChild) {
    div.removeChild(div.firstChild);
}

div.appendChild(newP)

  
function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}
