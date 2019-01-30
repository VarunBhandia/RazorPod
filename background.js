console.log("Internship Task background script running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender) {

    if (request.data) {
        console.log("request.data");
    }
}