/* globals chrome */
chrome.browserAction.onClicked.addListener(function (tab) {
  var query = {
    windowId: chrome.windows.WINDOW_ID_CURRENT
  }

  chrome.tabs.query(query, function (tabs) {
    var urls = {}
    tabs.forEach(function (tab, index) {
      var tabUrl = tab.url.split('#')[0]
      if (urls[tabUrl] === true) {
        // tab already exists, so remove it.
        chrome.tabs.remove(tab.id)
      } else {
        urls[tabUrl] = true
      }
    })
  })
})
