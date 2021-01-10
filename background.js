chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '' });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'stedelijklyceumpestalozzi.smartschool.be' },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});