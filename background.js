console.log("running in bg");

const URL1 = "https://www.amazon.com/RamThreeBhandia-Silt-Trivia/dp/B07KP6CY37/ref=sr_1_1?ie=UTF8&qid=1544182994&sr=8-1&keywords=silt+trivia+bhandia"
//const URL2 = "https://www.amazon.com/BhandiaVarun-duster-trivia/dp/B07JH22KZH/ref=sr_1_1?ie=UTF8&qid=1540568378&sr=8-1&keywords=duster+trivia"
const ALEXAWEBURL = "https://alexaweb.herokuapp.com/start"
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {	
	console.log(tab);
	chrome.tabs.sendMessage(tab.id, "hello")
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender){
//	if (request.stage === 1){
//			chrome.tabs.update(sender.tab.id, { url: URL1 });
//	}

	if (request.stage === 2){
			chrome.tabs.update(sender.tab.id, { url: URL1 });
	}

	if (request.stage === 3){
		chrome.tabs.update(sender.tab.id, {url: ALEXAWEBURL})
	}
}