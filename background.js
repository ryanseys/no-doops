/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* globals chrome */
const onClickListener = (tab) => {
  var query = {
    windowId: chrome.windows.WINDOW_ID_CURRENT
  }

  chrome.tabs.query(query, function (tabs) {
    var urls = {}
    tabs.forEach(function (tab, index) {
      var tabUrl = tab.url
      if (urls[tabUrl] === true) {
        // tab already exists, so remove it.
        chrome.tabs.remove(tab.id)
      } else {
        urls[tabUrl] = true
      }
    })
  })
}

chrome.action.onClicked.addListener(onClickListener);

