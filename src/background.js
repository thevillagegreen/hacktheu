chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({cols: 18}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({alt_color1: '#cc0000'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({alt_color2: '#75f0f0'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({over_color1: '#007800'}, function() {
    console.log("The color is green.");
  });
  chrome.storage.sync.set({over_color2: '#FF0000'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.tabs.create({ url: "../pages/options.html" });
