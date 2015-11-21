chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.create({
		url: 'pages/tuchuang.html',
		width: 300,
		height: 300,
		focused: true,
		type: 'popup'
	});	
});