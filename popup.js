let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var url = tabs[0].url;
    if(/read\.amazon\.com/.test(url))
    {chrome.tabs.executeScript(
        tabs[0].id,
        {file: "kindleOverlay.js"});
    }
    else if (/wikipedia\.org/.test(url)) {
      {chrome.tabs.executeScript(
          tabs[0].id,
          {file: "wikipediaOverlay.js"});
      }
    }
    else {
      //TODO what is the general case?
    }
  });
};

let changeTextColor = document.getElementById('colorText');

changeTextColor.onclick = function(element) {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {file:"changeTextColor.js"}
    );
  });
};

let removeTextColor = document.getElementById('removeColorText');

removeTextColor.onclick = function(element) {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {file:"removeTextColor.js"}
    );
  });
};

let removeBars = document.getElementById('removeBars');

removeBars.onclick = function(element) {
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

    var url = tabs[0].url;
    if(/read\.amazon\.com/.test(url))
    {chrome.tabs.executeScript(
        tabs[0].id,
        {file: "removeKindleOverlay.js"});
    }
    else if (/wikipedia\.org/.test(url)) {
      {chrome.tabs.executeScript(
          tabs[0].id,
          {file: "removeWikipediaBars.js"});
      }
    }
    else {
      //TODO what is the general case?
    }

    // chrome.tabs.executeScript(
    //   tabs[0].id,
    //   {file:"removeWikipediaBars.js"}
    // );
  });
};
