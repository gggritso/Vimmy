chrome.runtime.onMessage.addListener(
  function( request, sender, sendResponse ) {
    if ( request.message == 'newTab' ) chrome.tabs.create({ url: request.url });
});
